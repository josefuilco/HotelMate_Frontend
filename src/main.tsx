import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Auth from './modules/auth/view/Auth'
import './index.css'

// Implementamos nuestro router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)