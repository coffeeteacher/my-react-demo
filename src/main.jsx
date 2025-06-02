import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './0527-cart-ok/App.jsx'
// import './index.css'
// import './style.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
