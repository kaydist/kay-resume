import React, { useEffect } from "react";

function Project() {
  const projects = [
    { name: "anybuy", image: "" },
    { name: "iphone 13pro clone", image: "" },
  ];

  return (
    <div className="py-16 md:py-[16rem] practice-projects">
      <div className="">
        <h2 className="section-heading">PRACTICE PROJECTS</h2>
      </div>

      <div className="project-cursor opacity-0">
        <span className="skill-icon absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          View Project
        </span>
      </div>

      <div className="mt-6 md:mt-14">
        {projects.map((project, idx) => {
          return (
            <div
              id={project.name}
              key={idx}
              className="py-6 md:py-12 first:border-t border-b uppercase relative project"
            >
              <div className="paragraph">
                <p className="text-xl md:text-3xl">{project.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
