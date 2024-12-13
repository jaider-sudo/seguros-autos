import './Footer.css'
function Footer() {
        return (
            <footer className='contentFooter' >
                <div className='contentFooter'>
                    <div className='contentFooter-1'>
                        <img src="../public/surab.png" alt="" />
                    </div>
                    <div className='contentFooter-2'>
                        
                        <div className='contentFooter-2-2'>
                            <div className='trabajaConNosotros'>
                                <a href="">
                                    <p>¿Quienes somos?</p>
                                </a>
                            </div>
                        </div>
                        <div className='contentFooter-2-2'>
                            <div className='trabajaConNosotros'>
                                <a href="">
                                    <p>Trabaja con nosotros</p>
                                </a>
                            </div>
                        </div>
                        <div className='contentFooter-2-1'>
                            <div className='telefonoFooter-1'>
                                <img className='imgFooter' src="../public/telefonoF.png" alt="" />
                            </div>
                            <div className='telefonoFooter-2'>
                                <p>Línea de atención</p>
                                <p>600 411 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    export default Footer