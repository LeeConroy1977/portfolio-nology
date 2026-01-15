import React, { useEffect, useState } from "react";

const BodyCssAnimation = () => {
  const [isBody, setIsBody] = useState({
    body: false,
    background: false,
    margin: false,
    padding: false,
    boxSizing: false,
  });
  const { body, background, margin, padding, boxSizing } = isBody;

  const bodyCssAnimation = [
    { key: "body", delay: 3800 },
    { key: "background", delay: 4300 },
    { key: "margin", delay: 4700 },
    { key: "padding", delay: 5100 },
    { key: "boxSizing", delay: 5500 },
  ];

  useEffect(() => {
    const timer = bodyCssAnimation.map(({ key, delay }) => {
      setTimeout(() => {
        setIsBody((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });
    return () => timer.forEach(clearTimeout);
  }, []);
  return (
    <>
      {body && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            body <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {background && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                background-color<span className="text-white">:</span>{" "}
                <span className="ml-2 text-[#ffd704]">var</span>
                <span className="text-[#cd70d6]">{"("}</span>
                <span className="text-[#596ced]">--color-primary</span>
                <span className="text-[#cd70d6]">{")"}</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {margin && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                margin<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">0</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {padding && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                padding<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">0</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {boxSizing && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                box-sizing<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">border-box</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
    </>
  );
};

export default BodyCssAnimation;
