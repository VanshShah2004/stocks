import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import About from './About';
import Reviews from './Reviews';
import Download from './Download';
import Newsletter from './Newsletter';
import Brands from './Brands';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        
        {/* Content that will change based on the route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/download" element={<Download />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>

        {/* Render all components to be visible */}
      
        <Services />
        <About />
        <Reviews />
        <Download />
        <Newsletter />
        <Brands />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
