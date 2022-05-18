export const Cursor = () => {
  var newposX = 0;
  var newposY = 0;
  const mouseCursor = document.querySelector(".normal-cursor");
  const customSkillCursor = document.querySelector(".skill-cursor");
  const videoCursor = document.querySelector(".custom-video-cursor");

  const navCursor = document.querySelectorAll(".nav");
  const skillCursor = document.querySelectorAll(".skill");
  const hobbyCursor = document.querySelectorAll(".hobby");

  const positionMouse = () => {mouseCursor.setAttribute(
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
  }

  document.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY ;
    newposX = mouseX;
    newposY = mouseY;

    positionMouse()

    navCursor.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("mouse-link");
      });
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("mouse-link");
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
        videoCursor.classList.add("opacity-0");
      });
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("hidden");
        videoCursor.classList.add("video-cursor");
        videoCursor.classList.remove("opacity-0");
      });
    });
  });
};
