import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = viewportWidth > 830;
  const isWideDesktop = viewportWidth > 1700;

  return (
    <section
      id="hero"
      className={`relative h-screen w-full ${isDesktop ? "flex" : ""}`}
    >
      {isDesktop && (
        <div
          className="absolute bottom-0 left-0 top-0 w-1/4"
          style={{ backgroundColor: "rgb(5, 14, 10)" }}
        ></div>
      )}
      <div
        className={`${
          isDesktop ? "ml-auto w-3/4" : "w-full"
        } relative h-full bg-[url('./assets/images/p1-red-yellow/p1-3.jpeg')] bg-cover`}
        style={{
          backgroundPosition: "10% 0%",
        }}
      ></div>
      <h1
        className={`absolute z-10 transform rounded-lg font-lora text-red-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${
          isDesktop
            ? isWideDesktop
              ? "left-8 top-8 px-10 py-3 text-xxl"
              : "left-8 top-8 flex flex-col px-6 py-3 text-[10rem]"
            : "bottom-8 left-4 right-4 text-white bg-red-600 px-4 py-4 text-center xs:text-[7rem] sm:text-[4rem]"
        } `}
      >
        {isWideDesktop ? (
          "Aisya Wiley"
        ) : (
          <>
            <span>Aisya </span>
            <span>Wiley</span>
          </>
        )}
      </h1>
    </section>
  );
};

export default HeroSection;
