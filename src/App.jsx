import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useWindowSize } from "./context/WindowSizeContext";

function App() {
  const { width } = useWindowSize();
  const [isBody, setIsBody] = useState(false);

  useEffect(() => {
    {
      width <= 768 && document.body.classList.add("bg-[#0a131b]");
    }
    setTimeout(() => {
      document.body.classList.add("bg-[#0a131b]");
      setIsBody(true);
    }, 4300);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full items-center overflow-x-hidden">
      <Navbar />
      {width > 375 && <div id="introSection" className="w-full h-[6rem]"></div>}

      <IntroSection />
      {isBody && (
        <>
          <div
            id="introSection"
            className="bg-[#242c63] w-[90%] h-1 my-6 lg:my-10"></div>
          <AboutSection />
          <div className="bg-[#242c63] w-[90%] h-1 my-10"></div>
          <ProjectSection />
          <div className="bg-[#242c63] w-[90%] h-1 my-10"></div>
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
