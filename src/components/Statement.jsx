import React, { useEffect, useState } from "react";
import { useWindowSize } from "../context/WindowSizeContext";
const Statement = () => {
  const { width } = useWindowSize();
  const [isStatement, setIsStatement] = useState({
    firstLine: false,
    secondLine: false,
  });

  const { firstLine, secondLine } = isStatement;

  const statementAnimation = [
    { key: "firstLine", delay: 700 },
    { key: "secondLine", delay: 2100 },
  ];

  useEffect(() => {
    const timer = statementAnimation.map(({ key, delay }) => {
      setTimeout(() => {
        setIsStatement((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });

    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-[90%] text-white flex flex-col justify-between items-center p-2 md:p-16 lg:p-8 ">
      <div className="text-5xl md:text-7xl lg:text-9xl self-start text-white">
        {"{"}
      </div>
      {firstLine && (
        <h1 className="mr-auto text-4xl md:text-6xl lg:text-8xl md:ml-14 lg:ml-12 mt-6 lg:mt-0 pl-6 lg:pl-10 inline-block overflow-hidden whitespace-nowrap animate-[typing_1.5s_steps(40,end)_forwards]">
          <span className="text-[#5db6ec]">A</span>{" "}
          <span className="text-[#26a56e]">Junior</span>{" "}
          <span className="text-[#596ced] text-4xl md:text-6xl lg:text-8xl ]">
            Software
          </span>{" "}
          <br />
        </h1>
      )}
      <p
        className={`text-[#f66029]  text-4xl md:text-6xl lg:text-8xl md:pl-6 lg:pl-10 ml-6 mt-4 md:ml-14  lg:ml-12 mr-auto inline-block overflow-hidden whitespace-nowrap 
    ${
      secondLine
        ? "animate-[typing_1.5s_steps(40,end)_forwards] visible"
        : "invisible"
    }`}>
        Developer.
      </p>

      <div className="text-5xl md:text-7xl lg:text-9xl self-end text-white ">
        {"}"}
      </div>
    </div>
  );
};

export default Statement;
