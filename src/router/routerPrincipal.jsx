import Cotizacion from "../pages/Cotizador"
import Home from "../pages/Home"
import Login from "../pages/Login"

export const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Cotizacion',
        element:  <Cotizacion />
    }, 
    {
        path: '/Login',
        element: <Login />
    }
]