import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.min.css'
import 'react-toastify/ReactToastify.min.css'
const root = createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
