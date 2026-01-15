import React, { useEffect, useState } from "react";

const AppCodeCard = () => {
  const [isApp, setIsApp] = useState({
    rafce: false,
    boilerPlate: false,
    navbar: false,
    introSection: false,
    aboutSection: false,
    projectSection: false,
    contactSection: false,
    footer: false,
  });

  const {
    rafce,
    boilerPlate,
    navbar,
    introSection,
    aboutSection,
    projectSection,
    contactSection,
    footer,
  } = isApp;

  const appAnimation = [
    { delay: 0, on: ["rafce"] },
    { delay: 1500, on: ["boilerPlate"], off: ["rafce"] },
    { delay: 2000, on: ["navbar"] },
    { delay: 2600, on: ["introSection"] },
    { delay: 3200, on: ["aboutSection"] },
    { delay: 3800, on: ["projectSection"] },
    { delay: 4400, on: ["contactSection"] },
    { delay: 4800, on: ["footer"] },
  ];

  useEffect(() => {
    const timers = appAnimation.map(({ delay, on = [], off = [] }) =>
      setTimeout(() => {
        setIsApp((prev) => {
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
    <div className="w-full h-full bg-[#1d1e22] p-3 px-6 text-[#6db6ec] text-[0.9rem] leading-tight">
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
              {navbar && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">Navbar</span> from{" "}
                  <span className="text-[#26a56e]">"./components/Navbar"</span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
              {introSection && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">IntroSection</span>{" "}
                  from{" "}
                  <span className="text-[#26a56e]">
                    "./components/IntroSection"
                  </span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
              {aboutSection && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">AboutSection</span>{" "}
                  from{" "}
                  <span className="text-[#26a56e]">
                    "./components/AboutSection"
                  </span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
              {projectSection && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">ProjectSection</span>{" "}
                  from{" "}
                  <span className="text-[#26a56e]">
                    "./components/ProjectSection"
                  </span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
              {contactSection && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">ContactSection</span>{" "}
                  from{" "}
                  <span className="text-[#26a56e]">
                    "./components/ContactSection"
                  </span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
              {footer && (
                <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] ">
                  import <span className="text-[#596ced]">Footer</span> from{" "}
                  <span className="text-[#26a56e]">"./components/Footer"</span>{" "}
                  <span className="text-white">;</span>
                </p>
              )}
            </div>

            <div className="mt-12 flex flex-col">
              <p className="text-[1.1rem] text-[#f66029]">
                const <span className="text-[#5eb7cc] ml-1">App =</span>{" "}
                <span className="text-[#ffd704] ml-1">{"()"}</span>{" "}
                <span className="ml-1">{"=>"}</span>{" "}
                <span className="text-[#ffd704] ml-1">{"{"}</span>
              </p>
              <p className="mt-3 text-[1.1rem] ml-6 text-[#ffd704]">
                return <span className="text-[#cd70d6] ml-1">{"("}</span>
              </p>
              <p className="mt-3 ml-10 text-[1.1rem] text-[#f66029]">
                {"<"}
                <span className="text-[#f0c598]">div</span>
                {">"}
              </p>

              {navbar && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">Navbar</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}
              {introSection && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">IntroSection</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}
              {aboutSection && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">AboutSection</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}
              {projectSection && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">ProjectSection</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}
              {contactSection && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">ContactSection</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}
              {footer && (
                <p className="ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                  {"<"}
                  <span className="text-[#596ced]">Footer</span>
                  <span className="text-[#f66029] ml-2">{"/>"}</span>
                </p>
              )}

              <p className="mt-3 ml-10 text-[1.1rem] text-[#f66029]">
                {"</"}
                <span className="text-[#f0c598]">div</span>
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
              <span className="ml-1 text-[#596ced]">App</span>
              <span className="text-white ml-1">;</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCodeCard;
