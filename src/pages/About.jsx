import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
const About = () => {
  return (
    <>
      <AboutContent
        subHeading="About Us"
        mainHeading="Welcome to Maestro Pizzini"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam quasi sint deleniti blanditiis ut.Esse quas nulla facilis beatae atque."
        btnName="Read More"
        btnLink="/news"
      />
    </>
  );
};

export default About;
