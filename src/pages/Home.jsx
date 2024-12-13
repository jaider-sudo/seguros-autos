import './Home.css'
import Navbar from "../components/Navbar"
import Bannerhome from '../components/Bannerhome'
import Footer from '../components/Footer'

function Home (){
    return (
        <div>
            <Navbar />
            <Bannerhome />
            <Footer />
        </div>
    )
}
export default Home