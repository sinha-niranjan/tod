import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/footer'

function App() {
  return (
   <>
   <Navbar mode = "dark"/>
   <Carousel/>
   <Cards/>
   <Footer/>
   </>
  );
}

export default App;
