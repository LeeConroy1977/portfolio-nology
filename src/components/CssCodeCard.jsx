import React, { useEffect, useRef } from "react";
import BodyCssAnimation from "../components-css-animation/BodyCssAnimation";
import NavCssAnimation from "../components-css-animation/NavCssAnimation";
import ImageCssAnimation from "../components-css-animation/ImageCssAnimation";

const CssCodeCard = () => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);

  const scrollToBottom = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      scrollToBottom();
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={scrollRef}
      className="
        h-full
        overflow-y-auto
        scroll-smooth
        scrollbar scrollbar-thin
        bg-[#1d1e22]
        pt-3
        pb-20
        px-6
        min-h-0
        text-[0.85rem]
      ">
      <div ref={contentRef}>
        <BodyCssAnimation />
        <NavCssAnimation />
        <ImageCssAnimation />
      </div>
    </div>
  );
};

export default CssCodeCard;
