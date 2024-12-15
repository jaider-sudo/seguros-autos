import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const isHomePage = location.pathname === '/';
    const isCotizacionPage = location.pathname === '/Cotizacion';
    const isLoginPage = location.pathname === '/Perfil'
    return (
        <nav className='nabvarComponent'>
            <div className='nabvarComponent-content1'>
            <div className='nabvarComponent-item1'>
                    <img className='imgNabvar' src="../public/sura.webp" alt="logo sura" />
                    <h4>SURA en Colombia</h4>
                </div>
                <div className='nabvarComponent-item2'>

                    <Link to='/Cotizacion' className={` ${isCotizacionPage ? 'active': 'linkNavbar'}`} >Cotización</Link>
                    <Link to='/Login' className={` ${isLoginPage ? 'active': 'linkNavbarAC'}`}>Área cliente</Link>
                </div>
            </div>
            <div className='nabvarComponent-content2'>
                <p>seguros autos</p> <p>&gt;</p> <Link className={` ${isHomePage ? 'activeHome' : 'homeLinkNabvar'}`} to ='/'>Home</Link>
            </div>     
        </nav>
    )
}
export default Navbar