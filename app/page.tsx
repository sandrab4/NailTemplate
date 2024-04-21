import styles from "./page.module.css";
import Header from "./GlobalComponents/Header";
import Hero from "./Components/Hero";
import BestSellers from "./Components/BestSellers";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
    </div>
  );
};