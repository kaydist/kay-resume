import * as React from "react";
import { useEffect } from "react";
import Layout from "../layout/layout";

//sections
import TechnicalSkills from "../sections/technical-skills";
import Summary from "../sections/summary";
import Profile from "../sections/profile";
import Experiences from "../sections/experiences";
import Project from "../sections/projects";
import Education from "../sections/education";
import Hobbies from "../sections/hobbies";
import { Cursor } from "../animations/cusor";

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2">
        <div className="mx-auto md:w-[25%] h-screen md:fixed bg-white z-20">
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
