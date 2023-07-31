import About from "./components/About";
import Experience from "./components/Experience";
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
    </div>
  );
}

export default App;
