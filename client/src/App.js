import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Landing from "./Containers/Landing";

function App() {
  return (
    <div id="page-container">
      <Navbar />
      <div id="content-wrap">
        <Landing />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
