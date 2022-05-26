import Card from "components/subcomponents/Card";
import React from "react";
import ProjectHeading from "./ProjectHeading";

function Completed() {
  return (
    <div className="my-20">
      <ProjectHeading heading="completed projects" />
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 w-full">
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={1000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
        </div>
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
            totalRaised={1000}
            targetAmount={1000}
          />
        </div>
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={1000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
        </div>
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={1000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
        </div>
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
            totalRaised={1000}
            targetAmount={1000}
          />
        </div>
        <div>
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={1000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
        </div>
      </div>
    </div>
  );
}

export default Completed;
