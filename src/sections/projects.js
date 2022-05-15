import React from "react";

function Project() {
  const projects = [
    { name: "anybuy", image: "" },
    { name: "iphone 13pro clone", image: "" },
  ];
  return (
    <div className="py-16 md:py-[10rem]">
        <h2 className="">PRACTICE PROJECTS</h2>

      <div className="mt-6 md:mt-14">
        {projects.map((project, idx) => {
          return <div key={idx} className="py-6 md:py-12 first:border-t border-b uppercase text-xl md:text-3xl">{project.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Project;
