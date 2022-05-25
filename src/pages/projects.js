import Completed from "components/projects/Completed";
import Hero from "components/projects/Hero";
import Ongoing from "components/projects/Ongoing";
import Upcoming from "components/projects/Upcoming";
import React from "react";

export default function Projects() {
  return (
    <div className="md:max-w-[90%] px-4 md:px-5 h-full  w-full mx-auto">
      <Hero />
      <Upcoming />
      <Ongoing />
      <Completed />
    </div>
  );
}
