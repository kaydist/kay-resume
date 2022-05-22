import * as React from "react";
import { useLayoutEffect } from "react";
import Layout from "../layout/layout";

//sections
import TechnicalSkills from "../sections/technical-skills";
import Summary from "../sections/summary";
import Profile from "../sections/profile";
import Experiences from "../sections/experiences";
import Project from "../sections/projects";
import Education from "../sections/education";
import Hobbies from "../sections/hobbies";
import { TextAnimation } from "../animations/text";
import CoverLetter from "../sections/coverletter";
import CoverLetterBtn from "../sections/coverLetterBtn";

const IndexPage = () => {
  useLayoutEffect(() => {
    TextAnimation();
  }, []);
  return (
    <Layout>
      <CoverLetterBtn />
      <div className="flex flex-wrap gap-2">
        <div className="mx-auto md:w-[25%] h-screen md:fixed bg-white">
          <Profile />
        </div>

        <div className="md:ml-[40%] width-fill-available overflow-x-visible">
          <div id="resume">
            <div className="beforepin">
              <Summary />

              <TechnicalSkills />

              <Experiences />
            </div>

            <div className="afterpin">
              <Project />

              <Education />

              <Hobbies />
            </div>
          </div>

          <div id="coverletter" className="hidden">
            <div className="center min-h-screen">
              <CoverLetter />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
