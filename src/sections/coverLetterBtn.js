import React from "react";

import CoverLetterIcon from "../assets/icons/letter.inline.svg";

function CoverLetterBtn() {
  const toggleSection = () => {
    document.getElementById("resume").classList.toggle("hidden");
    document.getElementById("coverletter").classList.toggle("hidden");
  };
  return (
    <div
      className="fixed bottom-5 right-5 z-40 p-2 w-12 h-12 border bg-white border-[#111111] rounded-full nav"
      onClick={toggleSection}
      aria-hidden="true"
    >
      <span className="block w-full h-full">
        <CoverLetterIcon />
      </span>
    </div>
  );
}

export default CoverLetterBtn;
