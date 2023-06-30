import React from "react";
import "react-awesome-slider/dist/styles.css";

import "react-awesome-slider/dist/captioned.css";
import Carousel from "react-material-ui-carousel";

interface CarouselProps {
  value: string;
}

const Slider: React.FC<CarouselProps> = ({ value }) => {
  const imageCrypto = [
    "/imageCrypto/crypto1.png",
    "/imageCrypto/crypto2.png",
    "/imageCrypto/crypto3.png",
    "/imageCrypto/crypto4.png",
  ];
  const imageDepannage = [
    "/imageDepannage/dep1.png",
    "/imageDepannage/dep3.jpg",
    "/imageDepannage/dep4.jpg",
    "/imageDepannage/dep.jpg",
    "/imageDepannage/dep5.jpg",
    "/imageDepannage/dep6.jpg",
    "/imageDepannage/dep7.jpg",
  ];
  const videosurveillance = [
    "/videosurveillance/vid1.jpg",
    "/videosurveillance/vid2.jpg",
    "/videosurveillance/vid3.jpg",
    "/videosurveillance/vid4.jpg",
  ];

  const layerToDisplay = () => {
    let items;
    switch (value) {
      case "videosurveillance":
        return (items = videosurveillance);
      case "depannage":
        return (items = imageDepannage);
      case "minage":
        return (items = imageCrypto);
    }
    return items;
  };
  return (
    <div className="lg:w-2/3 w-11/12 mx-auto mb-12">
      <Carousel animation="slide" autoPlay={true} swipe={true}>
        {layerToDisplay()?.map((item, index) => (
          <div key={index}>
            <img src={item} className="px-5 m-auto" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
