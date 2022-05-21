import React from "react";

function Experiences() {
  
  return (
    <div
      className="py-16 md:pt-[7rem] md:pb-[10rem] professionalExperience"
      id="professionalExperience"
    >
      <div className="container">
        <h2
          className="section-heading"
        >
          Professional Experience
        </h2>
      </div>

      <div className="experience-overflow mt-14 md:mt-32 overflow-x-auto md:max-w-[60vw]">
        <div
          className="flex flex-col md:flex-row justify-start items-center gap-y-14 md:start md:flex-nowrap snap-x snap-mandatory snap-start
          "
        >
          <div className=" min-w-[65vw] panel">
            <div className="md:max-w-[70%] paragraph">
              <p>
                <div className="between flex-wrap">
                  <span className=" inline-block font-bold">GOZADE LTD</span>
                  <span className="inline-block md:text-right">
                    DECEMBER 2021 – JANUARY 2022
                  </span>
                </div>

                <span className="mt-2">Frontend Developer (Contract) </span>

                <ul className="mt-5 list-disc list-inside text-left">
                  <li className="mb-4">
                    Developed the Admin dashboard with full user functionality
                    for the organization’s new major client using React,
                    React-Bootstrap and SCSS.
                  </li>
                  <li className="mt-4">
                    Translated the UX team’s new email template design to code
                    using react-html-email.{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="min-w-[65vw] panel">
            <div className="md:max-w-[70%] paragraph">
              <p>
              <div className="between flex-wrap">
                <span className=" inline-block font-bold">HOPE</span>
                <span className="inline-block">
                  OCTOBER 2021 – NOVEMBER 2021
                </span>
              </div>
              <span className="mt-2">Frontend Developer (Volunteer) </span>

              <ul className="mt-5 list-disc list-inside text-left">
                <li className="mb-4">
                  Collaborated with the design team in revamping the web app’s
                  user interface for a top-notch experience.
                </li>
                <li className="mt-4">
                  Architected and Developed New Client-Side dashboard.
                </li>
                <li className="mt-4">
                  Integrated anonymous donator feature to the new Client Side.
                </li>
              </ul>
              </p>
            </div>
          </div>

          <div className="min-w-[65vw] panel">
            <div className="md:max-w-[70%] paragraph">
              <p>
              <div className="between flex-wrap">
                <span className=" inline-block font-bold">HOTELS.NG</span>
                <span className="inline-block md:text-right ">
                  AUGUST 2021 – OCTOBER 2021
                </span>
              </div>
              <span className="mt-2">Frontend Developer (Intern) </span>

              <ul className="mt-5 list-disc list-inside text-left">
                <li className="mb-4">
                  Led a team of 5 Frontend Engineers in developing the
                  organization’s Marketplace App for installation of plugins.
                </li>
                <li className="mt-4">
                  Improved Client-Client communication speed on organization’s
                  Noticeboard App by 3seconds by integration of real time
                  communication.
                </li>
                <li className="mt-4">
                  Developed custom reusable components using for the
                  organization’s Noticeboard Plugin.
                </li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
