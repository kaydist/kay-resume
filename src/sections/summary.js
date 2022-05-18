import React, { useLayoutEffect } from "react";
import { TextAnimation } from "../animations/text";

function Summary() {
  useLayoutEffect(() => {
    TextAnimation();
  }, []);
  return (
    <div className="py-16 md:py-[15rem]">
      <div className="overflow-hidden">
        <h2
          className="section-heading"
          onClick={() => {
            TextAnimation();
          }}
        >
          PROFESSIONAL SUMMARY
        </h2>
      </div>

      <div className="overflow-hidden paragraph">
        <p className="mt-6 md:mt-14">
          Enthusiastic, goal-driven frontend engineer experienced in developing
          from scratch and collaborating with design and backend teams to
          achieve pre-defined objectives. Extensive understanding about software
          development life cycle such as coding, debugging and maintenance of
          Web Applications using necessary Technologies.{" "}
        </p>
      </div>
    </div>
  );
}

export default Summary;
