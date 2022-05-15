import React from "react";

//images
import FacebookIcon from "../images/icons/facebook.inline.svg";
import GithubIcon from "../images/icons/github.inline.svg";
import TwitterIcon from "../images/icons/twitter.inline.svg";
import LinkedinIcon from "../images/icons/linkedin.inline.svg";

function Profile() {
  return (
    <div className="w-full h-full col-center space-y-8">
      <div className="w-52 h-52 rounded-full bg-black" />

      <div className="text-center">
        <h2 className="">OSENI OMOKAYODE</h2>
        <p className="">Frontend Engineer</p>
      </div>

      <div className="center w-full gap-6">
        <div className="w-8 h-8">
          <GithubIcon />
        </div>
        <div className="w-8 h-8">
          <LinkedinIcon />
        </div>
        <div className="w-8 h-8">
          <FacebookIcon />
        </div>
        <div className="w-8 h-8">
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
