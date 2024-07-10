import React from "react";
import web from "../src/Images/img2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name="welcome to About Page " img={web} visit="/contact" btname="contact us" />
    </>
  );
}

export default About;