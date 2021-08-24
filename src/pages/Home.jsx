import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import AboutContent from "../components/AboutContent/AboutContent";
import ProductRate from "../components/ProductRate/ProductRate";
import PizzaMenuContent from "../components/PizzaMenuContent/PizzaMenuContent";
import NumberCounter from "../components/NumberCounter/NumberCounter";
import Address from "../components/Address/Address";
import Items from "../components/Items/Items";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutContent
        subHeading="About Us"
        mainHeading="Welcome to Maestro Pizzini"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam quasi sint deleniti blanditiis ut.Esse quas nulla facilis beatae atque."
        btnName="Read More"
        btnLink="/news"
      />
      <ProductRate />
      <PizzaMenuContent />
      <NumberCounter />
      <Address />
      <Items />
    </>
  );
};

export default Home;
