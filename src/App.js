import About from "./components/About";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { Qualification } from "./components/Qualification";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Migara Kavishan</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="testing" />

      </Helmet>
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
