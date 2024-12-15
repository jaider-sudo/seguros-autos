import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whatsapp from '../components/Whatsapp';
import FormCotizacion from '../components/Form'


function Cotizacion (){
    return(
        <div className="bodyCotizacion">
           <Navbar />
           <div className="cotizacionForm">
           <FormCotizacion />
           </div>
           <div className='whatsappPages'>
                <Whatsapp />
            </div>
           <Footer />
        </div>
    )
}
export default Cotizacion;