import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import { Portfolio, Graduation, Portraits, Product, MISC } from "./pages/portfolio/index";
import Contact from "./pages/contact/index";

function App() {
  return (
    // checks for different routes and location for the url
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Portfolio} path="/portfolio" exact></Route>
          <Route component={Graduation} path="/portfolio/graduation" exact/>
          <Route component={Portraits} path="/portfolio/portraits" exact/>
          <Route component={Product} path="/portfolio/product" exact/>
          <Route component={MISC} path="/portfolio/misc" exact/>
        <Route component={Contact} path="/contact"></Route>
      </Switch>
    </Router>
  );
}

export default App;
