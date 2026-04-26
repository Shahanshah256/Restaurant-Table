import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualites from "../components/Qualites";
import Menu from "../components/Menu";
import WhoAreYou from "../components/WhoAreYou";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualites />
      <Menu />
      <WhoAreYou />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Home;
