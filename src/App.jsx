import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header';
import Home from './Components/Pages/HOme';
import About from './Components/Pages/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Pages/Services';

// If you’ve created these pages, import them
// 
// import Careers from './Components/Pages/Careers';
// import Contact from './Components/Pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
