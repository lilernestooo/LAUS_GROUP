import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollEffects";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Home />
      <Footer />
    </>
  );
}
export default App;