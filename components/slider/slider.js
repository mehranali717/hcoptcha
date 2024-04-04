"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderButtons from "./sliderbutton.js";
import "./slider.css";
import Image from "next/image.js";
import commaImg from "@/assets/images/Quote.png";
import surDMImg from "@/assets/images/SurDm.png";
import listImg from "@/assets/images/list-img.png";
import dmImg from "@/assets/images/dm.png";
const Slider = ({ data }) => {
  return (
    <section>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, buttons }) => (
              <SwiperSlide key={id}>
                <div className="slideInner">
                  <div className="slider-inner-img">
                    <Image src={commaImg} alt="img"/>
                  </div>
                  <p>
                    <SliderButtons buttons={buttons} />
                  </p>
                  <div className="slider-list">
                    <div className="slider-list-media">
                      <Image src={listImg} alt="listImg" />
                    </div>
                    <div className="slider-list-description">
                      <h4>SurDM</h4>
                      <p>Discord Marketing services</p>
                    </div>
                  </div>
                </div>
                <div className="slideInner">
                  <div className="slider-inner-img">
                    <Image src={commaImg} alt="img"/>
                  </div>
                  <p>
                    <SliderButtons buttons={buttons} />
                  </p>
                  <div className="slider-list">
                    <div className="slider-list-media">
                      <Image src={dmImg} alt="dmImg" />
                    </div>
                    <div className="slider-list-description">
                      <h4>SurDM</h4>
                      <p>Discord Marketing services</p>
                    </div>
                  </div>
                </div>
                <div className="slideInner">
                  <div className="slider-inner-img">
                    <Image src={commaImg} alt="img"/>
                  </div>
                  <p>
                    <SliderButtons buttons={buttons} />
                  </p>
                  <div className="slider-list">
                    <div className="slider-list-media">
                      <Image src={surDMImg} alt="surDMImg" />
                    </div>
                    <div className="slider-list-description">
                      <h4>SurDM</h4>
                      <p>Discord Marketing services</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </section>
  );
};

export default Slider;
