import React, { useEffect } from "react";

//assets
import FacebookIcon from "../assets/icons/facebook.inline.svg";
import GithubIcon from "../assets/icons/github.inline.svg";
import TwitterIcon from "../assets/icons/twitter.inline.svg";
import LinkedinIcon from "../assets/icons/linkedin.inline.svg";
import Headshot from "../assets/headshot.jpg";
import PDFVersion from "../assets/Oseni_Resume.pdf";

function Profile() {
  const currentTime = () => {
    var today = new Date();
    document.getElementById("timesection").textContent =
      today.getUTCHours() + 1 + ":" + today.getUTCMinutes();
  };

  useEffect(() => {
    currentTime()
    setInterval(() => {
      currentTime();
    }, 60000);
  }, []);

  return (
    <div className="col-between h-full">
      <div className="w-full h-[95%] col-center space-y-8">
        <div className="w-52 h-52 rounded-full overflow-hidden">
          <img
            src={Headshot}
            alt="Oseni Omokayode"
            className="w-full h-full object-cover object-left-top"
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl">OSENI OMOKAYODE</h2>
          <p className="">Frontend Engineer</p>
        </div>

        <div className="center w-full gap-6">
          <div className="w-5 h-5 nav">
            <GithubIcon />
          </div>
          <div className="w-5 h-5 nav">
            <LinkedinIcon />
          </div>
          <div className="w-5 h-5 nav">
            <FacebookIcon />
          </div>
          <div className="w-5 h-5 nav">
            <TwitterIcon />
          </div>
        </div>

        <div className="center w-full gap-6">
          <div className="">LAGOS, NG</div>
          <div id="timesection"></div>
        </div>
      </div>

      <form className="center my-4 w-full" method="get" action={PDFVersion}>
        <button type="submit" className="text-sm text-center nav">
          Download Resume
        </button>
      </form>
    </div>
  );
}

export default Profile;
