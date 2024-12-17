import './App.css'
import OffcanvasExample from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider/Slider';
import ProductCards from '../src/Components/ProductCard/PCard'
import Accessories from './Components/Accessories/Accessories';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <>
      <OffcanvasExample />
      <Slider />
      <ProductCards />
      <Accessories />
      <Footer />
    </>
  )
}

export default App
