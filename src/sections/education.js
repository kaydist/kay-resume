import React from "react";

function Education() {
  return (
    <div>
      <div className="py-16 md:py-[10rem]">
        <div className="">
          <h2 className="section-heading">Educational Background</h2>
        </div>

        <div className="mt-6 md:mt-14">
          <div className="between mb-12 paragraph">
            <span className="inline-block">
              <p className="font-bold">
                Federal University of Agriculture, Abeokuta
              </p>
              <p className="text-lg">
                Bachelor of Engineering in Mechatronics Engineering
              </p>
            </span>

            <span className="inline-block text-right text-lg">
              <p className="whitespace-nowrap">2017 - 2022</p>
            </span>
          </div>

          <div className="between mb-12 paragraph">
            <span className="inline-block">
              <p className="font-bold">
                Grazac Academy Undergraduate Tech Plan
              </p>
              <p className="text-lg">Frontend Development Track</p>
            </span>

            <span className="inline-block text-right text-lg">
              <p className="whitespace-nowrap">2021</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
