import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{fetcher}}>
    <App />
    </SWRConfig>
  </React.StrictMode>,
)
