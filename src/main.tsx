import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/variables.css'
import './styles/responsive.css'
import './styles/fonts.css'
import './styles/index.css'
import { HeadProvider } from 'react-head'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>,
)
