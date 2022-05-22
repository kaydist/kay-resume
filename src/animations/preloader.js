import gsap from "gsap";

export const preloader = () => {
  const heading = document.querySelector(".preloader-text");
  const progress = document.getElementById("progress");

  var arr = heading.textContent.split(" ");
  heading.textContent = "";

  arr.forEach((word) => {
    heading.innerHTML += `<span class='preloader-text'>${word}</span> `;
  });

  const tl = gsap.timeline();

  tl.to(progress, { opacity: 0 });

  tl.fromTo(
    ".preloader-text",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5, duration: 1.5, ease: "power4.out" }
  );

  tl.fromTo(".preloader", { y: 0 }, { y: "120%", ease: "expo.out", delay: 1 });
};
