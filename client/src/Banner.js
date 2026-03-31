import React from "react";
import { Carousel } from "react-bootstrap";
import mov from "./BannerIMG";
import "./App.css";

function Banner() {
  return (
    <Carousel interval={3000} fade>
      {mov.map((movie) => (
        <Carousel.Item key={movie.id}>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${movie.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          <div className="banner-fade" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
