import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./components/home/Hero/Hero";
import HowItWorks from "./components/home/HowItWorks/HowItWorks";
import ForSeekers from "./components/home/ForSeekers/ForSeekers";
import ForProviders from "./components/home/ForProviders/ForProviders";
import WhyVoltMate from "./components/home/WhyVoltMate/WhyVoltMate";
import SafetyTrust from "./components/home/SafetyTrust/SafetyTrust";
import FinalCTA from "./components/home/FinalCTA/FinalCTA";

import Auth from "./pages/Auth/Auth";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <ForSeekers />
        <ForProviders />
        <WhyVoltMate />
        <SafetyTrust />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
    </Routes>
  );
}

export default App;