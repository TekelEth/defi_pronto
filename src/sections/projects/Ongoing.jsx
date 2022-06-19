import Card from "components/subcomponents/Card";
import { useEffect, useState } from "react";
import { getFunctionByType } from "../../../utils/projects";
import ProjectHeading from "./ProjectHeading";

function Ongoing() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const res = getFunctionByType("ongoing");
    setProjects(res);
    console.log(res);
  }, []);
  return (
    <div className="my-20">
      <ProjectHeading heading="Ongoing projects" />
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 w-full">
        {projects &&
          projects.length > 0 &&
          projects.map((x, i) => (
            <div key={i}>
              <Card
                id={x.id}
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

export default Ongoing;
