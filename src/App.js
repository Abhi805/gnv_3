import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import OurTeam from "./pages/ourTeam/OurTeam";
import Infrastructure from "./pages/infrastructure/Infrastructure";
import OurServices from "./pages/ourServices/OurServices";
import WhyUs from "./pages/whyUs/whyUs";
import OurClients from "./pages/ourClients/OurClients";
import Gallery from "./pages/gallery/Gallery";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/whyUs" element={<WhyUs />} />
          <Route path="/ourClients" element={<OurClients />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Footer ya jo bhi MUI use karega */}
      </Router>
    </div>
  );
}

export default App;
