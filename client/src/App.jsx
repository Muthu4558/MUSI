import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactCTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import DataAnalyst from "./pages/DataAnalyst";
import UIUX from "./pages/UIUX";
import VideoEditing from "./pages/VideoEditing";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactCTASection />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/video-editing" element={<VideoEditing />} />
      </Routes>
      <Footer />
      <WhatsAppButton 
        phone="6385931500" 
        message="Hello! I want to chat about your services." 
      />
    </Router>
  );
};

export default App;