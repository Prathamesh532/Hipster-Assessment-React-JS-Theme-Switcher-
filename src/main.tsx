import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enable this for performance monitoring
// import { reportWebVitals } from './reportWebVitals';

// For debugging in development
if (import.meta.env.DEV) {
  console.log('Running in development mode');
  // Add any development-only code here
}

// Get the root element
const rootElement = document.getElementById('root');

// Make sure the root element exists
if (!rootElement) {
  throw new Error('Root element not found! Add a div with id="root" to your HTML');
}

// Create a root and render the app
const root = createRoot(rootElement);

// Render the app in StrictMode for development checks
// Might want to remove StrictMode in production for performance
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Uncomment to measure performance
// reportWebVitals(console.log);
