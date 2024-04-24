import Header from "./GlobalComponents/Header";
import Hero from "./Components/Hero";
import BestSellers from "./Components/BestSellers";
import Shapes from "./Components/Shapes";
import Footer from "./GlobalComponents/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <Shapes />
      <Footer />
    </div>
  );
};