import { Helmet } from "react-helmet";
import Favicon from "./components/Favicon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioGallery from "./components/PortfolioGallery";
import Digitals from "./components/Digitals";
import ContactForm from "./components/ContactForm";
import WorkExpTiles from "./components/WorkExpTiles";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <Helmet>
        <Favicon />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <WorkExpTiles expIds={["wexp-1", "wexp-2", "wexp-3"]} />
        <PortfolioGallery />
        <Digitals />
        <Socials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
