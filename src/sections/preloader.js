import React, { useEffect } from "react";

const test = () => {
  var perfData = window.performance.timing;
  var EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
  var time = parseInt((EstimatedTime / 1000) % 60) * 100;

  var start = 0;
  var end = 100;
  var durataion = time;
  animateValue(start, end, durataion);

  function animateValue(start, end, duration) {
    var PercentageID = document.getElementById("progress");
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = PercentageID;
    var timer = setInterval(function () {
      current += increment;
      obj.textContent = current + "%";
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
};

function Preloader() {
  useEffect(() => {
    test();
  }, []);

  return (
    <div className="h-screen w-screen fixed bg-[#111111] center z-50 preloader">
      <div className="overflow-hidden text-center">
        <h2 className="text-white preloader-text opacity-0">OSENI'S RESUME</h2>
        <h2 className="text-white" id="progress">
          0%
        </h2>
      </div>
    </div>
  );
}

export default Preloader;
