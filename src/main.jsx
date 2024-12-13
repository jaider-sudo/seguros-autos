import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/routerPrincipal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let rutas = createBrowserRouter(router);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rutas} />
  </StrictMode>,
)
