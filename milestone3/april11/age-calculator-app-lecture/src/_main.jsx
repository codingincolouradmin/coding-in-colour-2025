import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './components/views/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
