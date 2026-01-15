import React, { useEffect, useState } from "react";

const NavCodeCard = () => {
  const [isNav, setIsNav] = useState({
    rafce: false,
    boilerPlate: false,
    navClass: false,
    p: false,
    pClass: false,
    spanOne: false,
    spanOneClass: false,
    spanTwo: false,
    spanTwoClass: false,
    ul: false,
    ulClass: false,
    liOne: false,
    liOneClass: false,
    liTwo: false,
    liTwoClass: false,
    liThree: false,
    liThreeClass: false,
  });

  const {
    rafce,
    boilerPlate,
    navClass,
    p,
    pClass,
    spanOne,
    spanOneClass,
    spanTwo,
    spanTwoClass,
    ul,
    ulClass,
    liOne,
    liOneClass,
    liTwo,
    liTwoClass,
    liThree,
    liThreeClass,
  } = isNav;

  const navAnimation = [
    { delay: 0, on: ["rafce"] },
    { delay: 1500, on: ["boilerPlate"], off: ["rafce"] },
    { delay: 1800, on: ["navClass"] },
    { delay: 2000, on: ["p"] },
    { delay: 2000, on: ["pClass"] },
    { delay: 2600, on: ["spanOne"] },
    { delay: 2600, on: ["spanOneClass"] },
    { delay: 2600, on: ["spanTwo"] },
    { delay: 2600, on: ["spanTwoClass"] },
    { delay: 3200, on: ["ul"] },
    { delay: 3200, on: ["ulClass"] },
    { delay: 3500, on: ["liOne"] },
    { delay: 4400, on: ["liOneClass"] },
    { delay: 3800, on: ["liTwo"] },
    { delay: 4400, on: ["liTwoClass"] },
    { delay: 4100, on: ["liThree"] },
    { delay: 4400, on: ["liOneClass"] },
  ];

  useEffect(() => {
    const timers = navAnimation.map(({ delay, on = [], off = [] }) =>
      setTimeout(() => {
        setIsNav((prev) => {
          const next = { ...prev };
          on.forEach((key) => (next[key] = true));
          off.forEach((key) => (next[key] = false));
          return next;
        });
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-[#1d1e22] p-3 text-[#6db6ec] text-[0.9rem] leading-tight px-6">
      <div className="w-full h-[25%]">
        <div>
          {rafce && (
            <p className="text-[1rem] text-[#596ced] inline-block overflow-hidden whitespace-nowrap animate-[typing_1.5s_steps(40,end)_forwards]">
              rafce
            </p>
          )}
        </div>

        {boilerPlate && (
          <div className="">
            <div className="flex flex-col">
              <p className="inline-block overflow-hidden">
                import <span className="text-[#596ced]">React</span> from{" "}
                <span className="text-[#26a56e]">"react"</span>{" "}
                <span className="text-white">;</span>
              </p>
            </div>

            <div className="mt-12 flex flex-col">
              <p className="text-[1.1rem] text-[#f66029]">
                const <span className="text-[#5eb7cc] ml-1">Navbar =</span>{" "}
                <span className="text-[#ffd704] ml-1">{"()"}</span>{" "}
                <span className="ml-1">{"=>"}</span>{" "}
                <span className="text-[#ffd704] ml-1">{"{"}</span>
              </p>
              <p className="mt-3 text-[1.1rem] ml-6 text-[#ffd704]">
                return <span className="text-[#cd70d6] ml-1">{"("}</span>
              </p>
              <p className="mt-3 ml-10 text-[1.1rem] text-[#f66029]">
                {"<"}
                <span className="text-[#f0c598]">nav</span>
                {">"}
              </p>

              {p && (
                <>
                  <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                    {"<"}
                    <span className="text-[#f0c598]">p</span>
                    <span className="text-[#f66029] ">{">"}</span>
                  </p>
                  {spanOne && (
                    <p className="text-[#f66029] ml-20 text-[1.1rem] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                      <span className="text-[#596ced]">Lee</span> {"<"}
                      <span className="text-[#f0c598]">span</span>
                      {">"}
                      <span className="text-[#596ced]">John</span>
                      {"</"}
                      {"<"}
                      <span className="text-[#f0c598]">span</span>
                      {">"}
                      <p>
                        {"<"}
                        <span className="text-[#f0c598]">span</span>
                        {">"}
                        <span className="text-[#596ced]">Conroy</span>
                        {"</"}
                        <span className="text-[#f0c598]">span</span>
                        {">"}
                      </p>
                    </p>
                  )}
                  <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                    {"</"}
                    <span className="text-[#f0c598]">p</span>
                    <span className="text-[#f66029] ">{">"}</span>
                  </p>
                </>
              )}

              {ul && (
                <>
                  <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                    {"<"}
                    <span className="text-[#f0c598]">ul</span>
                    <span className="text-[#f66029] ">{">"}</span>
                  </p>
                  {liOne && (
                    <p className="text-[#f66029] ml-20 text-[1.1rem] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                      {"<"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                      <span className="text-[#596ced]">About</span>
                      {"</"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                    </p>
                  )}
                  {liTwo && (
                    <p className="text-[#f66029] ml-20 text-[1.1rem] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                      {"<"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                      <span className="text-[#596ced]">Projects</span>
                      {"</"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                    </p>
                  )}
                  {liThree && (
                    <p className="text-[#f66029] ml-20 text-[1.1rem] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                      {"<"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                      <span className="text-[#596ced]">Contact</span>
                      {"</"}
                      <span className="text-[#f0c598]">li</span>
                      {">"}
                    </p>
                  )}
                  <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                    {"</"}
                    <span className="text-[#f0c598]">ul</span>
                    <span className="text-[#f66029] ">{">"}</span>
                  </p>
                </>
              )}

              <p className="mt-3 ml-10 text-[1.1rem] text-[#f66029]">
                {"</"}
                <span className="text-[#f0c598]">nav</span>
                {">"}
              </p>
              <p className="ml-6 text-[1.1rem] text-[#cd70d6]">
                {")"}
                <span className="text-white ml-1">;</span>
              </p>
              <p className="text-[1.1rem] text-[#ffd704]">{"}"}</p>
            </div>

            <p className="mt-6 text-[1.1rem]">
              export <span className="ml-1">default </span>
              <span className="ml-1 text-[#596ced]">Navbar</span>
              <span className="text-white ml-1">;</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavCodeCard;
