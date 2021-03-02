import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Containers/Landing";
import Services from "./Containers/Services";
import About from "./Containers/About";
import Pricing from "./Containers/Pricing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router id="page-container">
      <Navbar />
      <Switch id="content-wrap">
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
