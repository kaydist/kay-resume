import React from "react";
import MusicVid from "../images/videos/listening-to-music.mp4";
import ReadingVid from "../images/videos/spongebob-reading.mp4";
import CommunicationVid from "../images/videos/imagination-spongebob.mp4";
import SwimmingVid from "../images/videos/spongebob-swim.mp4";

function Hobbies() {
  const hobbies = [
    { name: "Quick and Adaptive learning", image: "" },
    { name: "Great Communication skills", image: "" },
    { name: "alt music", image: "" },
    { name: "swimming", image: "" },
  ];

  const mouseIconChange = (name) => {
    const focus = document.getElementById(name);
    const hobbyIcon = document.querySelectorAll(".hobby-icon");

    hobbyIcon.forEach((skill) => {
      skill.classList.add("hidden");
    });

    focus.classList.remove("hidden");
    focus.play()
  };
  
  const mouseLeave = (name) => {
    const focus = document.getElementById(name);
    focus.pause()
  };

  return (
    <div className="py-16 md:py-[10rem]">
      <h2 className="">SOFT SKILLS X HOBBIES</h2>

      <div className="mt-6 md:mt-14">
        <div className="custom-video-cursor absolute opacity-0">

          <video
            id="Quick and Adaptive learning"
            className="hobby-icon flex justify-center items-center rounded-full w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            muted
            loop
          >
            <source src={ReadingVid} type="video/mp4" />
          </video>
          <video
            id="Great Communication skills"
            className="hobby-icon flex justify-center items-center rounded-full w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            muted
            loop
          >
            <source src={CommunicationVid} type="video/mp4" />
          </video>
          <video
            id="alt music"
            className="hobby-icon flex justify-center items-center rounded-full w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            muted
            loop
          >
            <source src={MusicVid} type="video/mp4" />
          </video>
          <video
            id="swimming"
            className="hobby-icon flex justify-center items-center rounded-full w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            muted
            loop
          >
            <source src={SwimmingVid} type="video/mp4" />
          </video>


        </div>

        {hobbies.map((hobby, idx) => {
          return (
            <div
              key={idx}
              className="py-6 md:py-12 first:border-t border-b uppercase text-xl md:text-3xl relative hobby"
              onMouseEnter={() => {
                mouseIconChange(hobby.name);
              }}

              onMouseLeave={()=>{
                mouseLeave(hobby.name);
              }}
            >
              {hobby.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hobbies;
