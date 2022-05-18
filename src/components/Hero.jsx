/* eslint-disable @next/next/no-img-element */
import React from "react";
import Nav from "./layout/Nav";
import Card from "./subcomponents/Card";

function Hero() {
  return (
    <div className="w-full h-full mx-auto ">
      <div className="relative">
        <img
          src="/assets/backgrounds/home-bg.png"
          alt="home"
          className="bg-cover bg-center w-full h-full bg-no-repeat"
        />
        <div className="relative mx-12 my-12 text-white max-w-[90%]">
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised="0.00"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={2000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
