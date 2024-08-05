import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "portfolio", "digitals", "socials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom > 50) {
            setActiveSection(section);
            setIsHeroSection(section === "hero");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
      setIsHeroSection(to === "hero");
    });

    Events.scrollEvent.register("end", (to) => {
      setActiveSection(to);
      setIsHeroSection(to === "hero");
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const sectionTitles = {
    hero: "Home",
    portfolio: "Portfolio",
    digitals: "Digitals",
    socials: "Socials",
    contact: "Contact",
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isHeroSection ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 font-inter">
        {!isHeroSection && (
          <h2 className="text-4xl font-bold text-black sm:text-2xl xs:text-xl">
            {sectionTitles[activeSection as keyof typeof sectionTitles]}
          </h2>
        )}
        <nav className={isHeroSection ? "w-full" : ""}>
          <ul
            className={`flex text-lg xs:text-[0.75rem] ${isHeroSection ? "justify-end" : ""}`}
          >
            {Object.entries(sectionTitles).map(([key, value]) => (
              <li
                key={key}
                className={`mx-2 xs:mx-1 ${
                  activeSection === key ? "font-semibold" : ""
                }`}
              >
                <Link
                  to={key}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-red-500 hover:text-red-800"
                >
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
