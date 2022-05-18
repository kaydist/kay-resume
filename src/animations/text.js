import { gsap } from "gsap";

export const TextAnimation = () => {
  const heading = document.querySelector(".section-heading");


  var arr = heading.textContent.split(" ");
  heading.textContent = "";

  arr.forEach((word) => {
    heading.innerHTML += `<span class='word'>${word}</span> `;
  });

  const tl = gsap.timeline({
      duration: 2.5,
      ease: 'power2.out'
})
  gsap.set(".word", { opacity: 0, y: 10, display: "inline-block" });
  gsap.set(".paragraph p", { opacity: 0, y: 10, display: "inline-block" });

  tl.fromTo(
    ".word",
    { y: 400, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.2 }
  );
  tl.fromTo(
    ".paragraph p",
    { y: 400, opacity: 0 },
    { y: 0, opacity: 1 },
    '<60%'
  );
};
