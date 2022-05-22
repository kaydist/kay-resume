import React from "react";
import PDFVersion from "../assets/Oseni_Coverletter.pdf";

function CoverLetter() {
  return (
    <div className="col-center">
      <div className="text-left h-[95%]">
        <p>Dear Hiring Manager,</p>

        <br />
        <p>
          I, OSENI Omokayode, wish to apply for the role of a Frontend Engineer,
          vending in your reputable company. I am quite interested in this
          position and would appreciate your consideration for the role.
        </p>

        <br />
        <p>
          In my previous experience, I worked with different teams of different
          sizes as a Frontend Engineer to deliver a great product and better
          User Experience for existing products. I worked closely with backend
          engineers to implement features to improve user experience. I have
          also worked with designers in creating and implementing clean and
          usable UI.
        </p>
        <br />
        <p>
          I am highly enthusiastic about building and improving solutions to
          every individual and building products to improve everyone's living
          experience. This makes me always eager to learn and adapt to new
          technologies as required to achieve goals.
        </p>
        <br />
        <p>
          My resume can be viewed by the button toggle. Thank you for taking the
          time to look through my application materials. If you have any
          questions about the information I included, please reach out. I look
          forward to hearing from you.
        </p>
        <br />
        <p>
          Sincerely,
          <br />
          Oseni Omokayode.
          <br />
          <br />
          <a href="mailto:kayodeoseni@ymail.com" className="nav block w-fit">
            kayodeoseni@ymail.com
          </a>
          <a href="tel:+2347062937325" className="nav block w-fit">
            +234 7062937325
          </a>
        </p>
      </div>

      <form className="center my-4 w-full" method="get" action={PDFVersion}>
        <button type="submit" className="text-sm text-center nav">
          Download Cover Letter
        </button>
      </form>
    </div>
  );
}

export default CoverLetter;
