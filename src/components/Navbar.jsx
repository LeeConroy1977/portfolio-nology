import React, { useEffect, useState } from "react";
import { useWindowSize } from "../context/WindowSizeContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isNavbar, setIsNavbar] = useState({
    nav: false,
    name: false,
    nameformat: false,
    nameColorOne: false,
    nameColorTwo: false,
    nameColorthree: false,
    links: false,
    linkFormat: false,
    linkColorOne: false,
    linkColortwo: false,
    linkColorThree: false,
  });
  const {
    nav,
    nameformat,
    nameColorOne,
    nameColorTwo,
    nameColorthree,
    linkFormat,
    links,
    linkColorOne,
    linkColortwo,
    linkColorThree,
  } = isNavbar;

  const navAnimation = [
    { key: "nav", delay: 10500 },
    { key: "name", delay: 10800 },
    { key: "nameformat", delay: 12000 },
    { key: "nameColorOne", delay: 12500 },
    { key: "nameColorTwo", delay: 12700 },
    { key: "nameColorthree", delay: 12900 },
    { key: "links", delay: 11000 },
    { key: "linkFormat", delay: 12000 },
    { key: "linkColorOne", delay: 12500 },
    { key: "linkColortwo", delay: 12700 },
    { key: "linkColorThree", delay: 12900 },
  ];

  useEffect(() => {
    const timer = navAnimation.map(({ key, delay }) => {
      setTimeout(() => {
        setIsNavbar((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <nav
      className={`relative flex flex-row items-center justify-between px-6 md:px-12 lg:px-24 w-full h-18 md:h-20 lg:h-24 border-b bg-primary z-10  border-[#242c63] font-primaryFont md:fixed ${
        nav || width <= 768 ? "" : "invisible"
      }`}>
      <a href="./#introSection">
        <p
          className={`${
            nameformat || width <= 768 ? "flex" : ""
          } text-[1.2rem] md:text-[1.4rem] lg:2xl xl:text-3xl ${
            nameColorOne || width <= 768 ? "text-[#596ced]" : "text-white"
          }`}>
          Lee
          <span
            className={`${
              nameformat || width <= 768 ? "ml-2 lg:ml-3 xl:ml-5" : ""
            } ${
              nameColorTwo || width <= 768 ? "text-[#26a56e]" : "text-white"
            } `}>
            John
          </span>
          <span
            className={`${
              nameformat || width <= 768 ? "ml-2 lg:ml-3 xl:ml-5" : ""
            } ${
              nameColorthree || width <= 768 ? "text-[#f66029]" : "text-white"
            } `}>
            Conroy
          </span>
        </p>
      </a>
      {width <= 375 && (
        <RxHamburgerMenu className=" text-[#596ced] text-2xl md:text-3xl right-6" />
      )}
      {width > 375 && (width <= 768 || links) && (
        <ul
          className={`${
            linkFormat || width <= 768
              ? "flex md:gap-12 lg:gap-14 xl:gap-20"
              : ""
          } md:text-[1.4rem] lg:text-2xl xl:text-3xl`}>
          <li
            className={`${
              linkColorOne || width <= 768 ? "text-[#596ced]" : "text-white"
            } cursor-pointer`}>
            <a href="#about">About</a>
          </li>

          <li
            href="#projects"
            className={`${
              linkColortwo || width <= 768 ? "text-[#26a56e]" : "text-white"
            } cursor-pointer`}>
            <a href="#projects">Projects</a>
          </li>
          <li
            href="#contact"
            className={`${
              linkColorThree || width <= 768 ? "text-[#f66029]" : "text-white"
            } cursor-pointer`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
