import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Portfolio from "./pages/portfolio/index";
import Contact from "./pages/contact/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Portfolio} path="/portfolio"></Route>
        <Route component={Contact} path="/contact"></Route>
      </Switch>
    </Router>
  );
}

export default App;
