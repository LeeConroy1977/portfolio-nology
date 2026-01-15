import React, { useEffect, useState } from "react";

const ImageCssAnimation = () => {
  const [isImg, setIsImg] = useState({
    imgContainer: false,
    display: false,
    alignItems: false,
    justifyContent: false,
    width: false,
    height: false,
    img: false,
    imgWidth: false,
    imgHeight: false,
    border: false,
    borderRadius: false,
  });
  const {
    imgContainer,
    display,
    alignItems,
    justifyContent,
    width,
    height,
    img,
    imgWidth,
    imgHeight,
    border,
    borderRadius,
  } = isImg;

  const imageCssAnimation = [
    { key: "imgContainer", delay: 16400 },
    { key: "display", delay: 16700 },
    { key: "alignItems", delay: 17000 },
    { key: "justifyContent", delay: 17300 },
    { key: "width", delay: 17600 },
    { key: "height", delay: 17900 },
    { key: "img", delay: 17000 },
    { key: "imgWidth", delay: 17300 },
    { key: "imgHeight", delay: 17600 },
    { key: "border", delay: 18200 },
    { key: "borderRadius", delay: 18200 },
  ];

  useEffect(() => {
    const timer = imageCssAnimation.map(({ key, delay }) => {
      setTimeout(() => {
        setIsImg((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <>
      {imgContainer && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#d74c1b]">
            .image-container <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {display && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                display<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2"> flex</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {alignItems && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                align-items<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">center</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {justifyContent && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                justify-content<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">center</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {width && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                width<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  40<span className="text-[#5db6ec]">%</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {height && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                height<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  100<span className="text-[#5db6ec]">%</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {img && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#d74c1b]">
            .image-container <span className="ml-2 text-[#5db6ec]">img</span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {imgWidth && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                width<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  300<span className="text-[#5db6ec]">px</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {imgHeight && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                height<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  300<span className="text-[#5db6ec]">px</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {borderRadius && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                border-radius<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  50<span className="text-[#5db6ec]">%</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}

            {border && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                border<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">
                  <span className="text-[#ffd704]">5</span>
                  <span className="text-[#5db6ec]">px</span>
                  <span className="ml-2">solid</span>{" "}
                  <span className="inline-block w-3 h-3 bg-white border border-gray-300 ml-2"></span>
                  <span className="ml-1 text-white">#ffffff</span>{" "}
                </span>
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

export default ImageCssAnimation;
