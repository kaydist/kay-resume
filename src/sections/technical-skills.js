import React from "react";
import ReactIcon from "../assets/icons/react.inline.svg";
import NextIcon from "../assets/icons/nextjs.inline.svg";
import GatsbyIcon from "../assets/icons/gatsby.inline.svg";
import TailwindIcon from "../assets/icons/tailwind.inline.svg";
import SassIcon from "../assets/icons/sass.inline.svg";
import StyledComponentIcon from "../assets/icons/styled-components.inline.svg";
import GsapIcon from "../assets/icons/greensock.inline.svg";
import ReduxIcon from "../assets/icons/redux.inline.svg";
import FirebaseIcon from "../assets/icons/firebase.inline.svg";

function TechnicalSkills() {
  const skills = [
    { name: "React Js", image: ReactIcon },
    { name: "Next Js", image: NextIcon },
    { name: "Gatsby Js", image: GatsbyIcon },
    { name: "Tailwind", image: TailwindIcon },
    { name: "Styled-component", image: StyledComponentIcon },
    { name: "Sass", image: SassIcon },
    { name: "Redux", image: ReduxIcon },
    { name: "Gsap", image: GsapIcon },
    { name: "Firebase", image: FirebaseIcon },
  ];

  const mouseIconChange = (name) => {
    const focus = document.getElementById(name);
    const skillIcon = document.querySelectorAll(".skill-icon");

    skillIcon.forEach((skill) => {
      skill.classList.add("hidden");
    });

    focus.classList.remove("hidden");
  };
  
  return (
    <div className="py-16 min-h-srceen">
      <div className="w-full">
        <div className="">
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="mt-6 md:mt-14 start flex-wrap">
          <div className="skill-cursor opacity-0">
            <span
              id="React Js"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <ReactIcon />
            </span>

            <span
              id="Next Js"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <NextIcon />
            </span>

            <span
              id="Gatsby Js"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <GatsbyIcon />
            </span>

            <span
              id="Tailwind"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <TailwindIcon />
            </span>

            <span
              id="Styled-component"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <StyledComponentIcon />
            </span>

            <span
              id="Sass"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <SassIcon />
            </span>

            <span
              id="Redux"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <ReduxIcon />
            </span>

            <span
              id="Gsap"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <GsapIcon />
            </span>

            <span
              id="Firebase"
              className="skill-icon absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <FirebaseIcon />
            </span>
          </div>

          {skills.map((skill, idx) => {
            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  mouseIconChange(skill.name);
                }}
                aria-hidden="true"
                className="col-start w-44 max-w-full py-4 md:py-6 uppercase relative skill paragraph"
              >
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
