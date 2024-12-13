import Cotizacion from "../pages/Cotizador"
import Home from "../pages/Home"

export const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Cotizacion',
        element:  <Cotizacion />
    }
]