import * as React from "react";
import Layout from "../layout/layout";
import gsap from "gsap";

//sections
import TechnicalSkills from "../sections/technical-skills";
import Summary from "../sections/summary";
import Profile from "../sections/profile";
import Experiences from "../sections/experiences";
import Project from "../sections/projects";
import Education from "../sections/education";
import Hobbies from "../sections/hobbies";

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2">
        <div className="mx-auto md:w-[25%] h-screen md:fixed bg-white">
          <Profile />
        </div>

        <div className="md:ml-[35%] width-fill-available">
          <Summary />

          <TechnicalSkills />

          <Experiences />

          <Project />

          <Education />

          <Hobbies />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
