import Header from "./global/header";
import Hero from "./sections/hero";
import BestSellers from "./sections/bestSellers";
import Shapes from "./sections/shapes";
import Footer from "./global/footer";

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