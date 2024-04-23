import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

export default function SimpleSlider() {
  const { language } = useContext(LanguageContext);
  const labels = {
    ES: {
      value1: "Empatía",
      value2: "Lealtad", 
      value3: "Integridad",
      value4: "Liderazgo",
      value5: "Perseverancia",
    },
    EN: {
      value1: "Empathy",
      value2: "Loyalty", 
      value3: "Integrity",
      value4: "Leadership",
      value5: "Perseverance",

    },
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

  };
  return (
    <Slider {...settings}>
        <div>
          <p className='font-mono text-3xl xl:text-5xl pt-4 xl:p-5'> {labels[language].value1} </p>
        </div>
        <div>
          <p className='font-mono text-3xl xl:text-5xl pt-4 xl:p-5'> {labels[language].value2} </p>
        </div>
        <div>
          <p className='font-mono text-3xl xl:text-5xl pt-4 xl:p-5'> {labels[language].value3} </p>
        </div>
        <div>
          <p className='font-mono text-3xl xl:text-5xl pt-4 xl:p-5'> {labels[language].value4} </p>
        </div>
        <div>
          <p className='font-mono text-3xl xl:text-5xl pt-4 xl:p-5'> {labels[language].value5} </p>
        </div>
    </Slider>
  );
}