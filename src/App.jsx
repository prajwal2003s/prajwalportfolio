import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ResumePage from "./Components/ResumePage"; // ✅ Added
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;