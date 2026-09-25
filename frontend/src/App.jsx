import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollEffects";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CompanyProfile from "./pages/Company-Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/company-profile" element={<CompanyProfile />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}
export default App;