# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Variables

Set these in the Vercel project settings ("i-ad-airport-limo"). None are required for the site to build or run — each serverless function degrades gracefully (friendly fallback, or a skipped no-op) when its vars are missing, and never crashes or hangs.

### Booking inquiry email (`api/quote-requests.js`)
| Variable | Purpose |
|---|---|
| `SMTP_USER` | Gmail address used to send booking-inquiry notification emails |
| `SMTP_PASSWORD` | 16-character Gmail app password for `SMTP_USER` |
| `NOTIFICATION_EMAIL` | Where booking notifications are delivered (defaults to `SMTP_USER`) |

### Distance lookup (`api/distance.js`, also used by the chat widget's instant-quote tool)
| Variable | Purpose |
|---|---|
| `GOOGLE_MAPS_API_KEY` / `GOOGLE_API_KEY` | Google Distance Matrix API key. Falls back to free Photon geocoding + OSRM routing if unset or if Google fails. |

### Stripe payments (`api/create-payment-intent.js`)
| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key used to create payment intents for paid instant-quote bookings |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` / `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key returned to the client |

### Chat widget (`api/chat.js`)
| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic API key. Without it, `/api/chat` still responds 200 with a friendly fallback reply (phone number + booking form) — it never errors. |
| `ANTHROPIC_CHAT_MODEL` | Optional. Defaults to `claude-haiku-5-5`. |

### Lead alerts (`api/lead-capture.js` and the chat widget's `submit_booking_lead` tool — `lib/sms.js` / `lib/leadWebhook.js`)
| Variable | Purpose |
|---|---|
| `TWILIO_ACCOUNT_SID` | Twilio account SID |
| `TWILIO_AUTH_TOKEN` | Twilio auth token |
| `TWILIO_FROM_NUMBER` | Twilio phone number the SMS alert is sent from |
| `ALERT_PHONE_NUMBER` | Phone number the SMS lead alert is sent to |
| `LEAD_WEBHOOK_URL` | Optional. If set, every captured lead is also POSTed as JSON to this URL (e.g. a CRM or Zapier/Make inbound webhook). |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
