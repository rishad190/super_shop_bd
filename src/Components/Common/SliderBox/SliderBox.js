import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../Assests/Image/slider-1.png";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./SliderBox.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const SliderBox = () => {
  return (
    <SliderMainBox>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        style={{ height: "538px", borderRadius: "15px" }}
      >
        <SwiperSlide>
          <Image src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </SliderMainBox>
  );
};

export default SliderBox;
const Image = styled.img`
  background-color: black;
  width: 100px;
`;
const SliderMainBox = styled.div`
  position: relative;
  height: 100%;
  margin: 20px 0;
`;
