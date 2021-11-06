import React from "react";
import Header from "../Components/Common/Header/Header";
import CatagoriesSection from "../Components/Home/CatagoriesSection/CatagoriesSection";
import HeaderMid from "../Components/Home/HeaderMid/HeaderMid";
import PopularProduct from "../Components/Home/PopularProduct/PopularProduct";
import SliderContainer from "../Components/Home/SliderContainer/SliderContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMid />
      <SliderContainer />
      <CatagoriesSection />
      <PopularProduct />
    </div>
  );
};

export default Home;
