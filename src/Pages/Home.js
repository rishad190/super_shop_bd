import React from "react";

import CatagoriesSection from "../Components/Home/CatagoriesSection/CatagoriesSection";

import PopularProduct from "../Components/Home/PopularProduct/PopularProduct";
import SliderContainer from "../Components/Home/SliderContainer/SliderContainer";

const Home = () => {
  return (
    <div>
      <SliderContainer />
      <CatagoriesSection />
      <PopularProduct />
    </div>
  );
};

export default Home;
