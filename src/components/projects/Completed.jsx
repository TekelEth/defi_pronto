import Card from "components/subcomponents/Card";
import React, { useEffect, useState } from "react";
import ProjectHeading from "./ProjectHeading";
import { getFunctionByType } from "../../../utils/projects";

function Completed() {
  const [projects, setProjects] = useState([]);
  useEffect( () => {
    const res = getFunctionByType("completed");
    setProjects(res);
    console.log(res);
  }, []);
  return (
    <div className="my-20">
      <ProjectHeading heading="completed projects" />
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 w-full">
        {projects && projects.length > 0  && projects.map((x, i) => (
          <div key={i}>
            <Card
              id = {x.id}
              image={x.image}
              heading={x.heading}
              totalRaised={x.totalRaised}
              targetAmount={x.targetAmount}
              desc={x.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;
