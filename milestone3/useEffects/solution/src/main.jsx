import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Removed Strict Mode so we don't get double renders
createRoot(document.getElementById('root')).render(
    <App />
)
