import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextAnimation = () => {

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  const tl = gsap.timeline();
  gsap.utils.toArray(".beforepin .section-heading").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    tl.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        stagger: 0.2,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  gsap.utils.toArray(".beforepin .paragraph p").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    tl.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  const professionalExperience = document.getElementById(
    "professionalExperience"
  );
  let sections = gsap.utils.toArray(".panel");

  ScrollTrigger.matchMedia({
    // large
    "(min-width: 768px)": function () {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: professionalExperience,
          pin: ".professionalExperience",
          scrub: 0.1,
          anticipatePin: 1.5,
          pinSpacing: true,
        },
      });
    },
  });

  gsap.utils.toArray(".afterpin .section-heading").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    tl.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        stagger: 0.2,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  gsap.utils.toArray(".afterpin .paragraph p").forEach((elem) => {
    hide(elem);
    var y = 50;
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    tl.fromTo(
      elem,
      { y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });
};
