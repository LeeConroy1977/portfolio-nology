import React, { useEffect, useState } from "react";

const NavCssAnimation = () => {
  const [isNav, setNav] = useState({
    nav: false,
    display: false,
    alignItems: false,
    justifyContent: false,
    width: false,
    height: false,
    padding: false,
    borderBottom: false,
    para: false,
    paraDisplay: false,
    fontSize: false,
    color: false,
    spanOne: false,
    marginLeft: false,
    spanOneColor: false,
    spanTwo: false,
    spanTwoMarginLeft: false,
    spanTwoColor: false,
    ul: false,
    ulDisplay: false,
    gap: false,
    ulFontSize: false,
    ulColor: false,
    listStyle: false,
    list: false,
    cursor: false,
    listHover: false,
    opacity: false,
  });

  const {
    nav,
    display,
    alignItems,
    justifyContent,
    width,
    height,
    padding,
    borderBottom,
    para,
    paraDisplay,
    fontSize,
    color,
    spanOne,
    marginLeft,
    spanOneColor,
    spanTwo,
    spanTwoMarginLeft,
    spanTwoColor,
    ul,
    ulDisplay,
    gap,
    ulFontSize,
    ulColor,
    listStyle,
    list,
    cursor,
    listHover,
    opacity,
  } = isNav;

  const navCssAnimation = [
    { key: "nav", delay: 9000 },
    { key: "display", delay: 9400 },
    { key: "alignItems", delay: 9400 },
    { key: "justifyContent", delay: 9800 },
    { key: "width", delay: 10200 },
    { key: "height", delay: 10600 },
    { key: "padding", delay: 11000 },
    { key: "borderBottom", delay: 11400 },
    { key: "para", delay: 11000 },
    { key: "paraDisplay", delay: 11300 },
    { key: "fontSize", delay: 11600 },
    { key: "color", delay: 11900 },
    { key: "spanOne", delay: 11300 },
    { key: "marginLeft", delay: 11600 },
    { key: "spanTwo", delay: 11600 },
    { key: "spanTwoMarginLeft", delay: 11900 },
    { key: "spanTwoColor", delay: 12100 },
    { key: "ul", delay: 11800 },
    { key: "ulDisplay", delay: 12100 },
    { key: "gap", delay: 12400 },
    { key: "ulFontSize", delay: 12800 },
    { key: "ulColor", delay: 13100 },
    { key: "listStyle", delay: 13400 },
    { key: "list", delay: 12900 },
    { key: "cursor", delay: 13100 },
    { key: "listHover", delay: 13100 },
    { key: "opacity", delay: 13300 },
  ];

  useEffect(() => {
    const timer = navCssAnimation.map(({ key, delay }) => {
      setTimeout(() => {
        setNav((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <>
      {nav && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="text-[#ffd704] ml-2">{"{"}</span>
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
                <span className="text-[#596ced] ml-2">space-between</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {width && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                width<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  100<span className="text-[#5db6ec]">%</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {height && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                height<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  6<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {padding && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                padding<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  0 <span className="ml-1">4</span>
                  <span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {borderBottom && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                border-bottom<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">
                  <span className="text-[#ffd704]">1</span>
                  <span className="text-[#5db6ec]">px</span>
                  <span className="ml-2">solid</span>{" "}
                  <span className="inline-block w-3 h-3 bg-[#1c3347] border border-gray-300 ml-2"></span>
                  <span className="ml-1 text-white">#1c3347</span>{" "}
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {para && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">p</span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {paraDisplay && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                display<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2"> flex</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {fontSize && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                font-size<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  1.875<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {color && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                color<span className="text-white">:</span>{" "}
                <span className="inline-block w-3 h-3 bg-[#596ced] border border-gray-300 ml-2"></span>
                <span className="text-white ml-1">#596ced</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {spanOne && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">p</span>{" "}
            <span className="ml-1">span</span>
            <span className="text-yellow-400 ml-1">
              <i>:first-of-type</i>
            </span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {marginLeft && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                font-size<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  1.875<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {spanOneColor && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                color<span className="text-white">:</span>{" "}
                <span className="inline-block w-3 h-3 bg-[#ffd704] border border-gray-300 ml-2"></span>
                <span className="text-white ml-1">#ffd704</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {spanTwo && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">p</span>{" "}
            <span className="ml-1">span</span>
            <span className="text-yellow-400 ml-1">
              <i>:last-of-type</i>
            </span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {spanTwoMarginLeft && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                font-size<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  1.875<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {spanTwoColor && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                color<span className="text-white">:</span>{" "}
                <span className="inline-block w-3 h-3 bg-[#f66029] border border-gray-300 ml-2"></span>
                <span className="text-white ml-1">#f66029</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {ul && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">ul</span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {ulDisplay && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                display<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2"> flex</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {gap && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                gap<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  4<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {ulFontSize && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                font-size<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">
                  1.5<span className="text-[#5db6ec]">rem</span>
                </span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {ulColor && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                color<span className="text-white">:</span>{" "}
                <span className="inline-block w-3 h-3 bg-white border border-gray-300 ml-2"></span>
                <span className="text-[#596ced] ml-1">white</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
            {listStyle && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                list-style<span className="text-white">:</span>{" "}
                <span className="text-[#596ced] ml-2">none</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {list && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">ul</span>
            <span className="ml-2">li</span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {cursor && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                cursor<span className="text-white">:</span>{" "}
                <span className="text-[#5db6ec] ml-2">pointer</span>
                <span className="ml-1 text-white">;</span>
              </p>
            )}
          </div>

          <p className="text-[#ffd704] ml-2">{"}"}</p>
        </>
      )}
      {listHover && (
        <>
          <p className="inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards] text-[#5db6ec]">
            nav <span className="ml-1">ul</span>
            <span className="ml-2">li</span>
            <span className="text-[#ffd704] ml-1">:hover</span>{" "}
            <span className="text-[#ffd704] ml-2">{"{"}</span>
          </p>

          <div className="ml-5 flex flex-col">
            {opacity && (
              <p className="text-[#f09d00] inline-block overflow-hidden whitespace-nowrap animate-[typing_1s_steps(40,end)_forwards]">
                opacity<span className="text-white">:</span>{" "}
                <span className="text-[#ffd704] ml-2">0.8</span>
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

export default NavCssAnimation;
