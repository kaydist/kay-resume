import React from 'react'

function Hobbies() {
    const hobbies = [
        { name: "Quick and Adaptive learning", image: "" },
        { name: "Great Communication skills", image: "" },
        { name: "alt music", image: "" },
        { name: "swimming", image: "" },
      ];
      return (
        <div className="py-16 md:py-[10rem]">
            <h2 className="">SOFT SKILLS X HOBBIES</h2>

          <div className="mt-6 md:mt-14">
            {hobbies.map((hobby, idx) => {
              return <div key={idx} className="py-6 md:py-12 first:border-t border-b uppercase text-xl md:text-3xl">{hobby.name}</div>;
            })}
          </div>
        </div>
      );
}

export default Hobbies