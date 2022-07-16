import React, { useRef, useState } from "react";
import styled from "styled-components";

// swiper
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

// assets
import { prevArrowIcon, nextArrowIcon } from "../assets";

const ImageSwiper = ({ children, shape }) => {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navagation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: swiper => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    spaceBetween: 10,
    onSwiper: setSwiper,
    onSlideChange: e => setMainImageIndex(e.activeIndex),
  };

  if (shape === "overflow") {
    return (
      <Swiper slidesPerView={1.045} {...swiperParams} ref={setSwiper}>
        {children}
        <PrevButton ref={navigationPrevRef} className='swiper-button-prev' />
        <NextButton ref={navigationNextRef} className='swiper-button-next' />
      </Swiper>
    );
  }
  return (
    <Swiper {...swiperParams} ref={setSwiper}>
      {children}
      <PrevButton ref={navigationPrevRef} className='swiper-button-prev' />
      <NextButton ref={navigationNextRef} className='swiper-button-next' />
    </Swiper>
  );
};

const PrevButton = styled.button`
  &.swiper-button-prev {
    background: url(${prevArrowIcon}) no-repeat;
    background-position: center;
  }
  &.swiper-button-prev::after {
    display: none;
  }
`;

const NextButton = styled.button`
  &.swiper-button-next {
    background: url(${nextArrowIcon}) no-repeat;
    background-position: center;
  }
  &.swiper-button-next::after {
    display: none;
  }
`;

export default ImageSwiper;
