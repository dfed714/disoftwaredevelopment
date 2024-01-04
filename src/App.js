import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
