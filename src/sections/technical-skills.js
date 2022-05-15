import React from "react";

function TechnicalSkills() {
  const skills = [
    { name: "React Js", image: "" },
    { name: "Next Js", image: "" },
    { name: "Gatsby Js", image: "" },
    { name: "Tailwind", image: "" },
    { name: "Styled-component", image: "" },
    { name: "Sass", image: "" },
    { name: "Redux", image: "" },
    { name: "GSAP", image: "" },
    { name: "Git", image: "" },
  ];
  return (
    <div className="py-16 md:py-[10rem]">
      <h2 className="">TECHNICAL SKILLS</h2>

      <div className="mt-6 md:mt-14 start flex-wrap">
        {skills.map((skill, idx) => {
          return (
            <div key={idx} className="col-start w-60 max-w-full py-4 md:py-6 uppercase"><p>{skill.name}</p></div>
          );
        })}
      </div>
    </div>
  );
}

export default TechnicalSkills;
