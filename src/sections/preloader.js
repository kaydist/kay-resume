import React from "react";

function Preloader() {
  return (
    <div className="h-screen w-screen fixed bg-[#111111] center z-50 preloader">
      <div className="overflow-hidden">
        <h2 className="text-white preloader-text opacity-0">OSENI'S RESUME</h2>
      </div>
    </div>
  );
}

export default Preloader;
