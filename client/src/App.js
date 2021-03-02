import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Containers/Landing";
import Services from "./Containers/Services";
import About from "./Containers/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div id="page-container">
      <Navbar />
      <div id="content-wrap">
        <Landing />
        <Services />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
