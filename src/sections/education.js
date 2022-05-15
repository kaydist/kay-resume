import React from "react";

function Education() {
  return (
    <div>
      <div className="py-16 md:py-[10rem]">
        <h2 className="">EDUCATIONAL BACKGROUND</h2>

        <div className="mt-6 md:mt-14">
          <div className="between mb-12">
            <span className=" inline-block">
              <p className="font-bold">
                Federal University of Agriculture, Abeokuta
              </p>
              <p className="text-lg">
                Bachelor of Engineering in Mechatronics Engineering
              </p>
            </span>

            <span className="inline-block text-right text-lg">2022</span>
          </div>

          <div className="between">
            <div className="">
              <p className="font-bold">
                Grazac Academy Undergraduate Tech Plan
              </p>
              <p className="text-lg">Frontend Development Track</p>
            </div>

            <div className="text-right text-lg">2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
