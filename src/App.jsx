import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header';
import Home from './Components/Pages/HOme';
import About from './Components/Pages/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Pages/Services';
import { Contact } from "./Components/Pages/Contact";
// import Contact from './Components/Pages/Contact'

// If you’ve created these pages, import them
// 
// import Careers from './Components/Pages/Careers';
// ;

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
