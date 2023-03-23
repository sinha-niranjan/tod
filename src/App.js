import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import TaskManager from "./components/TaskManager";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <>
        <Navbar mode="dark" login = "login" />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Cards />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/taskManager">
            <TaskManager />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
