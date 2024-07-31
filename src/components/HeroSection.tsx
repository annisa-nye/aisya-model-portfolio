import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [subheaderRole, setSubheaderRole] = useState("model");

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const roles = ["model", "artist", "cantik girl", "god", "client advisor"];

    const changeRole = () => {
      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      setSubheaderRole(randomRole);
      const newTimeout = Math.floor(Math.random() * 500 + 1000);
      setTimeout(changeRole, newTimeout);
    };

    changeRole();

    // Cleanup function to clear any remaining timeouts
    return () => clearTimeout(changeRole);
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
      <div
        className={`absolute z-10 ${
          isDesktop
            ? isWideDesktop
              ? "left-8 top-8"
              : "left-8 top-8"
            : "bottom-8 left-4 right-4"
        }`}
      >
        <h1
          className={`transform rounded-lg font-lora text-red-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${
            isDesktop
              ? isWideDesktop
                ? "px-10 py-3 text-xxl"
                : "flex flex-col px-6 py-3 text-[10rem]"
              : "bg-red-600 px-4 py-4 text-center text-white xs:text-[7rem] sm:text-[4rem]"
          }`}
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
        <div
          id="landing-subheader"
          className={`mt-2 p-2 text-2xl font-bold ${isDesktop ? "text-red-500" : "text-red-500 bg-white text-center rounded-lg"}`}
        >
          {subheaderRole}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
