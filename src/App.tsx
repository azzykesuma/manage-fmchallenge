import MainLayout from "./layout/MainLayout";
import Header from "./components/Header";
import PatternLayout from "./layout/PatternLayout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimony from "./components/Testimony";
import FooterCta from "./components/FooterCta";
import Footer from "./components/Footer";
function App() {
  return (
    <MainLayout>
      <PatternLayout position="top-right">
        <Header />
        <Hero />
      </PatternLayout>
      <PatternLayout position="bottom-left">
        <Features />
        <Testimony />
      </PatternLayout>
        <FooterCta />
        <Footer />
    </MainLayout>
  );
}

export default App;
