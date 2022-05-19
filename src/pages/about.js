import CustomLink from "components/CustomLink";
import Button from "components/general/Button";
import DefiPronto from "components/subcomponents/DefiPronto";
import React from "react";

export default function About() {
  return (
    <div className="max-w-[90%] py-24 w-full mx-auto">
      <div className="w-full text-transparent text-opacity-0 grid  grid-cols-2">
        <div className="w-full flex flex-col justify-start py-8">
          <h1 className="font-monument font-normal text-5xl text-white leading-[73px]">
            Decentralized tokens built on the{" "}
            <span className="text-theme-main">cardano network</span>
          </h1>
          <p className="w-[542px]  mt-3 text-left  text-theme-100 text-base font-DMSans leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque. Sed adipiscing risus aenean neque
            imperdiet amet fermentum.
          </p>
          <div className="mt-6 flex items-center justify-start">
            <CustomLink href={"/"}>
              <Button
                variant={"contained"}
                color={"error"}
                text="Get it Now"
              ></Button>
            </CustomLink>
            <CustomLink href={"/"}>
              <Button
                variant={"contained"}
                color={"error"}
                text="Get it Now"
              ></Button>
            </CustomLink>
          </div>
        </div>
        <div className="w-[85%] flex items-center justify-start">
          <img
            src="/assets/backgrounds/Looper-3.png"
            className="w-full bg-cover bg-center"
          />
        </div>
      </div>
      <DefiPronto />
    </div>
  );
}
