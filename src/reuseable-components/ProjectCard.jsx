import React from "react";
import { FaCode } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const handlePreviewClick = (address) => {
    window.open(address, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={` relative border-0 flex flex-col w-[30%] h-140 mt-10 rounded-4xl   `}>
      <div className="w-full h-[50%]  pb-0 ">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="w-full h-full  rounded-4xl border-3 border-gray-200"
          />
        ) : (
          <div className="bg-[#162a3b] w-full h-full rounded-4xl"></div>
        )}
      </div>
      <div className="w-full h-[50%]  flex flex-col px-3  rounded-bl-4xl rounded-br-4xl  ">
        <div className="flex justify-between items-center  pt-5">
          <p className={`${project.secondaryTextColour} text-3xl font-bold `}>
            {project.projectType}
          </p>
          <div
            className={`  flex flex-row items-center justify-start gap-4 mr-2  w-[55%] h-[4rem] `}>
            {project.technologies.map((technology) => {
              return (
                <div className={`${technology.colour} text-5xl`}>
                  {technology.icon}
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="font-bold text-4xl mt-2 text-[#596ced] ">
          {project.title}
        </h1>

        <div className="flex flex-row items-center w-full h-[6rem] mt-12  gap-4 mt-auto `">
          <button
            onClick={
              project.frontendBtn
                ? () => handlePreviewClick(project.frontendLink)
                : () => handlePreviewClick(project.codeLink)
            }
            className={`${
              project.frontendBtn ? "px-4" : "px-8"
            } flex items-center  py-3 border-2 rounded-lg font-bold text-[0.9rem] bg-white cursor-pointer`}>
            {project.frontendBtn ? (
              <>
                Frontend{" "}
                <span className="ml-2">
                  <FaCode className="size-[1.2rem]" />
                </span>
              </>
            ) : (
              <>
                Code{" "}
                <span className="ml-2">
                  <FaCode className="size-[1.2rem]" />
                </span>
              </>
            )}
          </button>
          {project.backendBtn && (
            <button
              onClick={() => handlePreviewClick(project.backendLink)}
              className="flex items-center px-5 py-3 border-2 rounded-lg font-bold text-[0.9rem] bg-white cursor-pointer">
              <>
                Backend{" "}
                <span className="ml-2">
                  <FaCode className="size-[1.2rem]" />
                </span>
              </>
            </button>
          )}

          <button
            onClick={() => handlePreviewClick(project.preview)}
            className={`${project.btnColour} text-white px-7 py-3 border-2 border-black rounded-lg font-bold text-[0.9rem] cursor-pointer`}>
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
