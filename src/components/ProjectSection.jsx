import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import ProjectCard from "../reuseable-components/ProjectCard";
import loudSpeaker from "../assets/images/loudSpeaker.png";
import { FaBullseye } from "react-icons/fa6";

const projects = [
  {
    title: "LoudSpeaker",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    technologies: [
      { colour: "text-[#61DAFB]", icon: <FaReact /> },
      { colour: "text-[#4ADE80]", icon: <FaNodeJs /> },
      { colour: "text-[#64748B]", icon: <BiLogoPostgresql /> },
      { colour: "text-[#5eb7cc]", icon: <RiTailwindCssFill /> },
    ],
    frontendBtn: true,
    backendBtn: true,
    codeBtn: FaBullseye,
    backgroundColour: "bg-[#596ced]",
    secondaryColour: "bg-[#cd70d6]",
    secondaryTextColour: "text-[#cd70d6]",
    btnColour: "bg-[#26a56e]",
    image: loudSpeaker,
    projectType: "Full Stack",
    borderColour: "border-[#cd70d6]",
    preview: "https://loudspeaker77.netlify.app",
    frontendLink: "https://github.com/LeeConroy1977/LoudSpeaker-FE",
    backendLink: "https://github.com/LeeConroy1977/nc-news-backend-project",
    codeLink: "",
  },
  {
    title: "Battleship",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    technologies: [
      { colour: "text-[#F7DF1E]", icon: <FaJs /> },
      { colour: "text-[#CC6699]", icon: <FaSass /> },
    ],
    frontendBtn: false,
    backendBtn: false,
    codeBtn: true,
    backgroundColour: "bg-[#f66029]",
    secondaryTextColour: "text-[#cd70d6]",
    btnColour: "bg-[#596ced]",
    projectType: "JS game",
    secondaryColour: "bg-[#26a56e]",
    frontendLink: "",
    backendLink: "",
    codeLink: "",
  },
  {
    title: "Project 3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    technologies: [
      { colour: "text-[#61DAFB]", icon: <FaReact /> },
      { colour: "text-[#4ADE80]", icon: <FaNodeJs /> },
      { colour: "text-[#64748B]", icon: <BiLogoPostgresql /> },
      { colour: "text-[#5eb7cc]", icon: <RiTailwindCssFill /> },
    ],
    frontendBtn: false,
    backendBtn: false,
    codeBtn: true,
    backgroundColour: "bg-[#26a56e]",
    secondaryTextColour: "text-[#cd70d6]",
    btnColour: "bg-[#cd70d6]",
    projectType: "Full Stack",
    secondaryColour: "bg-[#f66029]",
    frontendLink: "",
    backendLink: "",
    codeLink: "",
  },
  {
    title: "Project 4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    technologies: [
      { colour: "text-[#61DAFB]", icon: <FaReact /> },
      { colour: "text-[#4ADE80]", icon: <FaNodeJs /> },
      { colour: "text-[#64748B]", icon: <BiLogoPostgresql /> },
      { colour: "text-[#5eb7cc]", icon: <RiTailwindCssFill /> },
    ],
    frontendBtn: false,
    backendBtn: false,
    codeBtn: true,
    backgroundColour: "bg-[#cd70d6]",
    btnColour: "bg-[#5db6ec]",
    secondaryTextColour: "text-[#cd70d6]",
    projectType: "Full Stack",
    frontendLink: "",
    backendLink: "",
    codeLink: "",
  },
  {
    title: "Project 5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    technologies: [
      { colour: "text-[#61DAFB]", icon: <FaReact /> },
      { colour: "text-[#4ADE80]", icon: <FaNodeJs /> },
      { colour: "text-[#64748B]", icon: <BiLogoPostgresql /> },
      { colour: "text-[#5eb7cc]", icon: <RiTailwindCssFill /> },
    ],
    frontendBtn: false,
    backendBtn: false,
    codeBtn: true,
    backgroundColour: "bg-[#cd70d6]",
    btnColour: "bg-[#f66029]",
    projectType: "Full Stack",
    secondaryTextColour: "text-[#cd70d6]",
    frontendLink: "",
    backendLink: "",
    codeLink: "",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      s
      className="flex flex-col  items-start justify-start w-full min-h-230   font-primaryFont  pt-[6rem] pb-16 ">
      <div className="flex flex-col justify-between w-[100%] h-full ">
        <div className="pl-40">
          <h2 className="text-5xl text-[#596ced] mt-12">Projects.</h2>
          <div className="bg-[#26a56e] w-[24rem] h-[0.5rem] mt-8"></div>
        </div>
        <div className=" flex justify-center">
          <div className=" w-[75%]  flex flex-row flex-wrap justify-start items-center gap-8 gap-x-14  mt-10">
            {projects.map((project, i) => {
              return <ProjectCard key={i} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
