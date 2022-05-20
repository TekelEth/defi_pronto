import DefiPronto from "components/subcomponents/DefiPronto";
import Hero from "components/about/Hero";
import React from "react";
import SectionOne from "components/about/SectionOne";
import SectionTwo from "components/about/SectionTwo";

export default function About() {
  return (
    <div className="max-w-[90%] px-4 md:px-5  py-8 w-full mx-auto">
      <Hero />
      <DefiPronto />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
