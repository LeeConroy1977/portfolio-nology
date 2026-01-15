import React from "react";
import jsImg from "../assets/images/js-icon.png";
import reactImg from "../assets/images/react-icon.png";
import cssImg from "../assets/images/CSS3.png";
import sassImg from "../assets/images/sass-icon.png";
import javaImg from "../assets/images/Java.png";
import nodeImg from "../assets/images/Node.js.png";
import nestImg from "../assets/images/Nest.js.png";
import tsImg from "../assets/images/ts.png";
import pgImg from "../assets/images/PostgresSQL.png";
import htmlImg from "../assets/images/HTML5.png";
import mongoImg from "../assets/images/MongoDB.png";
import nextImg from "../assets/images/Next.js.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      s
      className="flex flex-col lg:flex-row  items-start justify-start w-full min-h-full lg:h-240 px-4 mb-12 lg:mb-0  lg:px-40 font-primaryFont pt-4 lg:pt-[6rem] ">
      <div className="flex flex-col justify-start w-[100%] lg:w-[40%] h-full ">
        <div>
          <h2 className="text-3xl lg:text-5xl text-[#596ced] mt-4 lg:mt-12">
            About Me.
          </h2>
          <div className="bg-[#f66029] w-50 lg:w-[24rem] h-[0.5rem] mt-8"></div>
        </div>
        <p className=" py-12 px-6 lg:py-24 lg:px-12 text-2xl  lg:text-4xl text-[#596ced]">
          I’m an aspiring software developer with a strong passion for learning
          and creating. I enjoy solving problems, building projects, and
          exploring new technologies. My goal is to grow as a developer, improve
          my skills and contribute to projects that make a positive impact.
        </p>
      </div>

      <div className="w-86 h-86 lg:w-200 lg:h-200 lg:ml-20 lg:p-16 grid grid-cols-4 grid-rows-4">
        <div className="grid col-span-1 row-span-1 bg-[#596ced] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full  lg:aspect-square rounded-full bg-yellow-300 animate-bg-pulse-js p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img src={jsImg} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#cd70d6] animate-bg-pulse-react p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={reactImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#5eb7cc] p-2"></div>

        <div className="grid col-span-1 row-span-1 bg-[#cd70d6] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#f66029] animate-bg-pulse-css p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img src={cssImg} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-red-400 p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#26a56e] animate-bg-pulse-post p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img src={pgImg} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#cd70d6] p-2">
          <div className="size-full rounded-full"></div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#596ced] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-red-400 animate-bg-pulse-node p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={nodeImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#5eb7cc] animate-bg-pulse-mongo p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={mongoImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 p-2">
          <div className="size-full rounded-full"></div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#26a56e] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-white animate-bg-pulse-java p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={javaImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-red-400 p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#cd70d6] animate-bg-pulse-ts p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img src={tsImg} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#596ced] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-red-200 animate-bg-pulse-next p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={nextImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#cd70d6] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#596ced] animate-bg-pulse-nest p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={nestImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-[#5eb7cc] animate-bg-pulse-sass p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={sassImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#26a56e] p-2">
          <div className="w-[72px] h-[72px] lg:w-full lg:h-full lg:aspect-square rounded-full bg-green-400 animate-bg-pulse-html p-3 lg:p-6 flex items-center justify-center border-4 lg:border-8 border-black">
            <img
              src={htmlImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid col-span-1 row-span-1 bg-[#f66029] p-2">
          <div className="size-full rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
