import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login successful! Welcome back.');
    } else {
      alert('Account created successfully! Please login.');
      setIsLogin(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Login Section */}
      <section className="py-20 min-h-[80vh] flex items-center">
        <div className="max-w-md mx-auto px-4 w-full">
          <div className="bg-[#1a1a1a] border border-[#333] p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-gray-500">
                {isLogin ? 'Sign in to manage your bookings' : 'Join IAD Airport Limo today'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#333] text-white pl-12 pr-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                      placeholder="John Doe"
                      data-testid="login-name-input"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-[#333] text-white pl-12 pr-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    data-testid="login-email-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-[#333] text-white pl-12 pr-12 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="••••••••"
                    data-testid="login-password-input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                    data-testid="login-toggle-password"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                    <input type="checkbox" className="accent-[#c9a227]" />
                    Remember me
                  </label>
                  <button type="button" className="text-[#c9a227] hover:text-white transition-colors">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
                data-testid="login-submit-btn"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Toggle */}
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#c9a227] ml-2 hover:text-white transition-colors"
                  data-testid="login-toggle-form"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 pt-8 border-t border-[#333]">
              <p className="text-center text-gray-500 text-sm mb-4">Or continue with</p>
              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-[#111] border border-[#333] text-white hover:border-[#c9a227] transition-colors">
                  Google
                </button>
                <button className="flex-1 py-3 bg-[#111] border border-[#333] text-white hover:border-[#c9a227] transition-colors">
                  Apple
                </button>
              </div>
            </div>
          </div>

          {/* Quick Booking */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Just want to book a ride?{' '}
              <Link to="/book-now" className="text-[#c9a227] hover:text-white transition-colors">
                Book without an account
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoginPage;
