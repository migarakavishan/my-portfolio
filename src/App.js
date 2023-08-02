import About from "./components/About";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { Qualification } from "./components/Qualification";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
