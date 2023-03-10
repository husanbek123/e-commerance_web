import React from "react";
import "./home.scss";
import { Carousel } from "antd";

const Home = () => {
  return (
    <div className="homepage">
      <div
        style={{
          width: "1200px",
          height: "300px",
          backgroundColor: "darkblue",
        }}
        className="Carusel__wrapper"
      >
        <Carousel autoplay dots={true} pauseOnHover dotPosition={"right"}>
          <div>
            <h2 style={{ color: "white", lineHeight: "300px" }}>
              "Shop Savvy: Your One-Stop Online Marketplace"
            </h2>
          </div>
          <div>
            <h2 style={{ color: "white", lineHeight: "300px" }}>
              Article on the Benefits of Yoga for Mental Health
            </h2>
          </div>
          <div>
            <h2 style={{ color: "white", lineHeight: "300px" }}>
              Creative Writing Piece - A Walk in the Woods:
            </h2>
          </div>
          <div>
            <h2 style={{ color: "white", lineHeight: "300px" }}>
              Product Review of a Smartwatch:
            </h2>
          </div>
        </Carousel>
      </div>
      <h1 className="homepage-title">Welcome to My Website!</h1>
      <p className="homepage-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet nibh at odio ultricies blandit. Nullam euismod eros vel libero
        faucibus, vel bibendum dolor auctor. Proin iaculis, quam at finibus
        consectetur, purus nulla hendrerit ipsum, sit amet pretium tellus augue
        id lectus. Nulla facilisi.
      </p>
      <button className="homepage-button">Learn More</button>
    </div>
  );
};

export default Home;
