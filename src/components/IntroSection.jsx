import React, { useEffect, useState } from "react";
import CodeContainer from "../reuseable-components/CodeContainer";
import AppCodeCard from "./AppCodeCard";
import CssCodeCard from "./CssCodeCard";
import NavCodeCard from "./NavCodeCard";
import ImageCodeCard from "./ImageCodeCard";
import StatementCodeCard from "./StatementCodeCard";
import Statement from "./Statement";
import profileImg from "../assets/images/portfolio-profile.jpg";
import profileImgBefore from "../assets/images/portfolio-profile_0.jpg";
import { useWindowSize } from "../context/WindowSizeContext";

const IntroSection = () => {
  const { width } = useWindowSize();
  const [isIntroSection, setIsIntroSection] = useState({
    app: false,
    nav: false,
    image: false,
    displayImageContainer: false,
    displayImage: false,
    statement: false,
    finish: false,
    photo: false,
  });
  const {
    app,
    nav,
    image,
    displayImageContainer,
    displayImage,
    statement,
    finish,
    photo,
  } = isIntroSection;

  const IntroSectionAnimation = [
    { delay: 0, on: ["app"] },
    { delay: 7000, on: ["nav"], off: ["app"] },
    { delay: 15000, on: ["image"], off: ["nav"] },
    { delay: 16700, on: ["displayImageContainer"] },
    { delay: 17500, on: ["displayImage"] },
    { delay: 21000, on: ["statement"], off: ["image"] },
    { delay: 24000, on: ["finish"], off: ["statement"] },
    { delay: 27000, on: ["photo"] },
  ];

  useEffect(() => {
    const timers = IntroSectionAnimation.map(({ delay, on = [], off = [] }) =>
      setTimeout(() => {
        setIsIntroSection((prev) => {
          const next = { ...prev };
          on.forEach((key) => (next[key] = true));
          off.forEach((key) => (next[key] = false));
          return next;
        });
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const tabNamesOne = ["App.jsx", "Navbar.jsx", "Image.jsx", "Statement.jsx"];
  const tabNamesTwo = ["CSS"];

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-around w-full h-full md:h-220 mt-12 md:mt-0 lg:h-206 px-4 lg:px-20 font-primaryFont  ">
      <div className="flex flex-row w-[100%] lg:w-[60%]  h-[100%] text-white  rounded-lg lg:p-6 lg:gap-8 mb-8 md:mt-0">
        {width <= 768 && <Statement />}
        {finish && width > 768 && <Statement />}
        {!finish && width > 768 && (
          <>
            <CodeContainer
              tabNameOne={tabNamesOne[0]}
              tabNameTwo={tabNamesOne[1]}
              tabNameThree={tabNamesOne[2]}
              tabNameFour={tabNamesOne[3]}
              width="w-[60%]"
              scroll={false}
              overflow={false}>
              {app && <AppCodeCard />}
              {nav && <NavCodeCard />}
              {image && <ImageCodeCard />}
              {statement && <StatementCodeCard />}
            </CodeContainer>
            <CodeContainer
              tabNameOne={tabNamesTwo[0]}
              width="w-[40%]"
              scroll={false}
              overflow={true}>
              <CssCodeCard />
            </CodeContainer>
          </>
        )}
      </div>

      <div
        className={` w-60 h-60 md:w-80 md:h-80 lg:w-80 lg:h-80  xl:w-100 xl:h-100 rounded-full bg-gray-800 md:mt-12 lg:mt-0 lg:mb-50 xl:mb-40 ${
          displayImage || width <= 768
            ? "border-white border-8 lg:border-10"
            : ""
        }
    ${displayImageContainer || width <= 768 ? "" : "invisible"}
    flex items-center justify-center
  `}>
        {displayImage && width > 768 && (
          <img
            className="w-full h-full rounded-full object-cover"
            src={displayImage && photo ? profileImg : profileImgBefore}
            alt="profile picture"
          />
        )}
        {width <= 768 && (
          <img
            className="w-full h-full rounded-full object-cover"
            src={profileImg}
            alt="profile picture"
          />
        )}
      </div>
    </section>
  );
};

export default IntroSection;
