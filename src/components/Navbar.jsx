import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='nabvarComponent'>
                <div>
                    <img src="../public/sura.webp" alt="logo sura" />
                </div>
                <div className='nabvarComponent-item2'>
                    <Link to='/Cotizacion' className='linkNavbar'>Cotización</Link>
                    <Link to='' className='linkNavbarAC'>Área cliente</Link>
                </div>
        </nav>
    )
}
export default Navbar