import React, { useEffect, useRef, useState } from "react";

const CodeContainer = ({
  tabNameOne,
  tabNameTwo,
  tabNameThree,
  tabNameFour,
  children,
  width,
  scroll,
  overflow,
}) => {
  const tabs = [tabNameOne, tabNameTwo, tabNameThree, tabNameFour].filter(
    Boolean
  );

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (tabs.length === 1) return;
    const timers = [
      setTimeout(() => setActiveTab(1), 0),
      setTimeout(() => setActiveTab(2), 7000),
      setTimeout(() => setActiveTab(3), 15000),
      setTimeout(() => setActiveTab(4), 21000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className={`flex flex-col h-[96%] bg-[#1c1c1c] border border-[#414347] ${width} ${
        overflow ? "overflow-y-hidden" : ""
      }`}>
      <div className="flex flex-row w-full h-[8%] bg-[#0c0d0e] ">
        {tabs.map((tabName, index) => (
          <div
            key={tabName || index}
            className={`
              flex justify-center items-center h-full flex-1
              text-[1.1rem] border-r-2 border-[#0c0d0e]
              ${
                activeTab === index + 1
                  ? "bg-[#1d1e22] text-gray-300"
                  : "bg-[#111316] text-gray-500"
              }
            `}>
            {tabName || "Tab " + (index + 1)}
          </div>
        ))}

        {tabs.length < 4 &&
          Array.from({ length: 4 - tabs.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex-1 h-full bg-[#0c0d0e] border-r-2 border-[#0c0d0e]"
            />
          ))}
      </div>

      {children}
    </div>
  );
};

export default CodeContainer;
