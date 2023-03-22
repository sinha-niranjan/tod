import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/footer'
import About  from './components/About';
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact';
import TaskManager from './components/TaskManager';
function App() {
  return (
   <>
   <Navbar mode = "dark"/>
   {/* <Carousel/>
   <Cards/> */}
   {/* <Login /> */}
   {/* <Signup /> */}
   {/* <Contact /> */}
   <About/>
   {/* <TaskManager /> */}
   <Footer/>
   </>
  );
}

export default App;
