// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// Custom scss
import "./index.scss";
// React Router
import { Route, Switch, Redirect } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
// import Error from "./pages/Error";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/shop" component={Shop} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
