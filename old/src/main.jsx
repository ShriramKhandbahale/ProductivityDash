import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { KanbanProvider } from './context'
import './styles/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <KanbanProvider>
      <App />
    </KanbanProvider>
  </BrowserRouter>
)
//     <React.StrictMode>
// </React.StrictMode>
