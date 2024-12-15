import './Home.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bodyHome'>
                <Navbar />
            <div className='imgHome'>
                <div className='imgHomeInfo'>
                    <div className='imgHomeInfoCien'>
                        <h3>100% Online</h3>
                    </div>
                    <div className='imgHomeInfoText'>
                        <p className='imgHomeInfoText-1'>Seguro todo Riesgo </p>
                        <p className='imgHomeInfoText-2'>Colombia</p>
                        <p className='imgHomeInfoText-3'>Para que pases de perderte en ese viaje a viajar para encontrarte</p>
                    </div>
                    <img className='imgHomeInfoDescuento' src="../public/descuento.png" alt="" />
                    <div className='imgHomeBoton'>
                        <div>
                            <Link className='imgHomeBotonLink' to='/Cotizacion'>Cotización <img className='imgHomeBotonimg' src="./public/flecha.png" alt="" /></Link>
                        </div>
                    </div>

                </div>
                <div className='imgHomeInfoCurva'>

                </div>
            </div>
            <div className='textoInformativoHome'>
                <div>
                    <p>Con <strong>el Seguro para Carros de SURA Colombia</strong> ,
                        obtén la protección que necesitas para tu vehículo. Conoce nuestras amplias
                        variedades de opciones con excelentes coberturas
                        y valores agregados para tu tranquilidad en todo momento.
                        Confía en <strong>SURA</strong> para respaldarte en cada viaje.</p>
                    <h4>Somos reconocidos especialistas en la rama de automóviles.</h4>
                </div>
            </div>
            <div>
                
                <div>

                </div>
            </div>
            <div className='whatsappPages'>
                <Whatsapp />
            </div>
                <Footer />
        </div>
    )
}
export default Home