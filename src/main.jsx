import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './Components/portfolio/ErrorBoundary'
import { initGA } from './utils/analytics'

// Initialize Google Analytics (replace with your actual GA4 measurement ID)
// initGA('G-XXXXXXXXXX');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
