import React, { useEffect, useState } from "react";

const ImageCodeCard = () => {
  const [isImage, setIsImage] = useState({
    rafce: false,
    boilerPlate: false,
    image: false,
  });

  const { rafce, boilerPlate, image } = isImage;

  const imageAnimation = [
    { delay: 0, on: ["rafce"] },
    { delay: 1500, on: ["boilerPlate"], off: ["rafce"] },
    { delay: 2000, on: ["image"] },
  ];

  useEffect(() => {
    const timers = imageAnimation.map(({ delay, on = [], off = [] }) =>
      setTimeout(() => {
        setIsImage((prev) => {
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
                <p className="text-[1.1rem] text-[#f66029] ">
                  const <span className="text-[#5eb7cc] ml-1">Image =</span>{" "}
                  <span className="text-[#ffd704] ml-1">{"()"}</span>{" "}
                  <span className="ml-1">{"=>"}</span>{" "}
                  <span className="text-[#ffd704] ml-1">{"{"}</span>
                </p>
                <p className="mt-3 text-[1.1rem] ml-6 text-[#ffd704]">
                  return <span className="text-[#cd70d6] ml-1">{"("}</span>
                </p>
                <p className="mt-3 ml-10 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1.5s_steps(40,end)_forwards">
                  {"<"}
                  <span className="text-[#f0c598]">
                    div{" "}
                    <span className="text-[0.9rem] text-[#ffd704]">class</span>
                    <span className="text-[0.9rem] text-[#5eb7cc]">=</span>
                    <span className="text-[0.9rem] text-[#26a56e]">
                      "img-container"
                    </span>
                  </span>
                  {">"}
                </p>
                {image && (
                  <p className="mt-3 ml-16 text-[1.1rem] text-[#f66029] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                    {"<"}
                    <span className="text-[#f0c598]">
                      img{" "}
                      <span className="text-[0.9rem] ml-2 text-[#ffd704]">
                        src
                      </span>
                      <span className="text-[0.9rem] text-[#5eb7cc]">=</span>
                      <span className="text-[0.9rem] text-[#26a56e]">
                        "./images/profile-img.png"
                      </span>
                      <span className="text-[0.9rem] ml-2 text-[#ffd704]">
                        alt
                      </span>
                      <span className="text-[0.9rem] text-[#5eb7cc]">=</span>
                      <span className="text-[0.9rem] text-[#26a56e]">
                        "profile image"
                      </span>
                    </span>
                    {"/>"}
                  </p>
                )}
                <img src="" alt="" />
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
                <span className="ml-1 text-[#596ced]">Image</span>
                <span className="text-white ml-1">;</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCodeCard;
