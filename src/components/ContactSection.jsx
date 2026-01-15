import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const handleLinkClick = (address) => {
    window.open(address, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      s
      className="flex flex-row  items-start justify-start w-full h-230   font-primaryFont pt-[6rem] ">
      <div className="flex flex-col justify-between w-[40%] h-[90%] pl-40 ">
        <div className="">
          <h2 className="text-5xl text-[#596ced] mt-12">Contact.</h2>
          <div className="bg-[#cd70d6] w-[24rem] h-[0.5rem] mt-8"></div>
        </div>

        <div className="w-full flex flex-col pl-6 ">
          <div className="w-[50%] flex flex-col text-white">
            <p className="text-2xl text-[#cd70d6]">EMAIL</p>
            <p className="text-2xl mt-2">lee.conroy@nology.io</p>
          </div>
          <div className="w-[50%] flex flex-col text-white mt-8">
            <p className="text-2xl text-[#cd70d6]">PHONE</p>
            <p className="text-2xl mt-2">07587907560</p>
          </div>
        </div>
        <div className="flex flex-col  w-full h-[25%]  ">
          <div className="w-full h-[66%] flex flex-row justify-start items-center mt-auto pl-6 pb-10">
            <FaGithub
              onClick={() =>
                handleLinkClick("https://github.com/LeeConroy1977")
              }
              className="text-7xl  text-[#F5F5F5] cursor-pointer"
            />
            <FaLinkedin
              onClick={() =>
                handleLinkClick(
                  "https://www.linkedin.com/in/lee-conroy-67192078/"
                )
              }
              className="text-7xl  text-[#0A66C2] ml-8 cursor-pointer"
            />
            <FaTwitter
              onClick={() => handleLinkClick("")}
              className="text-7xl  text-[#1DA1F2] ml-8 cursor-pointer"
            />
            <FaFacebook
              onClick={() =>
                handleLinkClick("https://www.facebook.com/lee.conroy.96")
              }
              className="text-7xl text-[#1877F2] ml-8 cursor-pointer"
            />
          </div>
        </div>
        <button className=" flex items-center justify-center font-bold mr-auto mb-12 px-8 py-3 ml-6 w-[250px] bg-[#596ced] self-center text-[1.1rem] rounded-lg text-white cursor-pointer">
          Download CV
          <span className="ml-3">
            <FaDownload />
          </span>
        </button>
      </div>
      <div className="w-[60%] flex flex-col h-full  items-center justify-start m-12">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
