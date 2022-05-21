import React, { useState } from "react";

import CoverLetterIcon from "../assets/icons/letter.inline.svg";

function CoverLetterBtn() {
  const toggleSection = () => {
    document.getElementById("resume").classList.toggle("hidden");
    document.getElementById("coverletter").classList.toggle("hidden");
  };
  return (
    <div
      className="fixed bottom-4 right-4 z-40 p-6 w-8 h-8 border border-[#111111] rounded-full"
      onClick={toggleSection}
    >
      <span><CoverLetterIcon /></span>
    </div>
  );
}

export default CoverLetterBtn;
