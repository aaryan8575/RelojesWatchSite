import React from "react";
import FeatureProduct from "./components/FeatureProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Relojes",
    desc: "Relojes is an online watch store that offers a wide range of high-quality watches for both men and women. The store features a diverse collection of watches from various renowned brands, including luxury and designer brands, as well as more affordable options.Customers can choose from a variety of styles, including sporty, casual, classic, and elegant designs, to match their personal preferences and needs. The watches come in different materials such as stainless steel, leather, and rubber, and they feature different functions such as chronographs, alarms, and timers."
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
