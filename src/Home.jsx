import React from "react";
import web from "../src/Images/img1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="grow your business with " img={web} visit="/service" btname="get started" />
    </>
  );
}

export default Home;