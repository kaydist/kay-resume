export const Cursor = () => {
  var newposX = 0;
  var newposY = 0;

  const mouseCursor = document.querySelector(".normal-cursor");
  const customProjectCursor = document.querySelector(".project-cursor");
  const customSkillCursor = document.querySelector(".skill-cursor");
  const videoCursor = document.querySelector(".custom-video-cursor");

  const NavLink = document.querySelectorAll(".nav");
  const projectCursor = document.querySelectorAll(".project");
  const skillCursor = document.querySelectorAll(".skill");
  const hobbyCursor = document.querySelectorAll(".hobby");

  const positionMouse = () => {
    mouseCursor.setAttribute(
      "style",
      "top: " + newposY + "px; left: " + newposX + "px"
    );
    customProjectCursor.setAttribute(
      "style",
      "top: " + newposY + "px; left: " + newposX + "px"
    );
    customSkillCursor.setAttribute(
      "style",
      "top: " + newposY + "px; left: " + newposX + "px"
    );
    videoCursor.setAttribute(
      "style",
      "top: " + newposY + "px; left: " + newposX + "px"
    );
  };

  document.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    newposX = mouseX;
    newposY = mouseY;

    positionMouse();
  });

  NavLink.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("bg-transparent");
      mouseCursor.classList.remove("scale-[3]");
      mouseCursor.classList.remove("border");
      mouseCursor.classList.add("border-[#111111]");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("bg-transparent");
      mouseCursor.classList.add("scale-[3]");
      mouseCursor.classList.add("border");
      mouseCursor.classList.add("border-[#111111]");
    });
  });

  projectCursor.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("hidden");
      customProjectCursor.classList.remove("custom-project-link");
      customProjectCursor.classList.add("opacity-0");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("hidden");
      customProjectCursor.classList.add("custom-project-link");
      customProjectCursor.classList.remove("opacity-0");
    });
  });

  skillCursor.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("hidden");
      customSkillCursor.classList.remove("custom-skill-link");
      customSkillCursor.classList.add("opacity-0");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("hidden");
      customSkillCursor.classList.add("custom-skill-link");
      customSkillCursor.classList.remove("opacity-0");
    });
  });

  hobbyCursor.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("hidden");
      videoCursor.classList.remove("video-cursor");
      videoCursor.classList.add("hidden");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("hidden");
      videoCursor.classList.add("video-cursor");
      videoCursor.classList.remove("hidden");
    });
  });
};
