import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

// Floating live-chat widget, backed by /api/chat. Sits above the always-on
// FloatingCallButton (bottom-5 right-5) so the two never overlap.
const GREETING = {
  role: 'assistant',
  content: "Hi! I'm the IAD Airport Limo assistant. Ask me about pricing, our fleet, or booking a ride.",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || typeof data.reply !== 'string') {
        throw new Error('Unexpected response from chat service');
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      if (data.leadCaptured) {
        try {
          sessionStorage.setItem('leadSubmitted', '1');
        } catch {
          // sessionStorage unavailable (private mode, etc.) — not fatal.
        }
      }
    } catch (err) {
      setError("Sorry, that didn't go through. Please try again or call (877) 609-1919.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle button — stacked above the floating call button. */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat with IAD Airport Limo'}
        data-testid="chat-widget-toggle"
        className="fixed bottom-24 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#d4af37] text-black shadow-2xl shadow-black/40 hover:bg-[#e3c158] active:scale-95 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat with IAD Airport Limo"
          data-testid="chat-widget-panel"
          className="fixed bottom-40 right-4 sm:right-5 z-50 w-[92vw] max-w-[360px] h-[70vh] max-h-[540px] flex flex-col bg-black border border-white/15 rounded-2xl shadow-2xl overflow-hidden bk-scale-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-white/10">
            <div>
              <p className="text-[#d4af37] font-bold text-sm tracking-wide uppercase">IAD Airport Limo</p>
              <p className="text-white/40 text-xs">Usually replies instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[80%] rounded-2xl rounded-br-sm bg-[#d4af37] text-black px-3.5 py-2 text-sm leading-relaxed'
                      : 'max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 text-white px-3.5 py-2 text-sm leading-relaxed'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 text-white/70 px-3.5 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Typing…
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-400 text-xs px-1" role="alert">
                {error}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-white/10 bg-black">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              aria-label="Chat message"
              disabled={loading}
              className="flex-1 bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4af37] focus:bg-[#d4af37]/5 transition-colors"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#d4af37] text-black disabled:opacity-40 hover:bg-[#e3c158] transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
