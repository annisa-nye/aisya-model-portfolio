import React, { useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialLinkProps {
  platform: string;
  icon: IconType;
  url: string;
}

const socialLinks: SocialLinkProps[] = [
  {
    icon: FaInstagram,
    platform: "Instagram",
    url: "https://www.instagram.com/aisyawiley/",
  },
  {
    icon: FaTiktok,
    platform: "TikTok",
    url: "https://www.tiktok.com/@icyaish_?_t=8iHHFg8x3ou&_r=1",
  },
  {
    icon: FaYoutube,
    platform: "YouTube",
    url: "https://www.youtube.com/@bubblebaby110",
  },
];

const duration = 0.25;
const stagger = 0.025;

const FlipLink: React.FC<SocialLinkProps> = ({ platform, icon: Icon, url }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimationControls();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      if (!isAnimating) {
        setIsAnimating(true);
        controls.start("animated").then(() => {
          setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
            setIsAnimating(false);
            controls.start("initial");
          }, 1000); // 1 second delay
        });
      }
    },
    [url, isAnimating, controls]
  );

  return (
    <motion.a
      animate={controls}
      initial="initial"
      whileHover="animated"
      whileTap="animated"
      href={url}
      onClick={handleClick}
      className="relative block overflow-hidden whitespace-nowrap font-bold uppercase text-white"
      style={{
        fontSize: "clamp(2rem, 6vw, 5rem)",
        lineHeight: 1.2,
      }}
    >
      <div className="flex items-center">
        <Icon className="mr-5 text-7xl sm:text-5xl" />
        {platform.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              animated: { y: "-100%" },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center">
        <Icon className="invisible mr-5 text-7xl sm:text-5xl" />
        {platform.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              animated: { y: 0 },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Socials: React.FC = () => {
  return (
    <section id="socials">
      <h2 className="bg-white px-6 py-6 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-6 sm:pl-2 sm:pt-4 sm:text-2xl">
        Socials
      </h2>
      <div className="grid h-auto place-content-center gap-4 bg-red-600 px-4 py-16 font-inter text-white sm:gap-6 sm:px-8 sm:py-20">
        {socialLinks.map((social) => (
          <FlipLink key={social.platform} {...social} />
        ))}
      </div>
    </section>
  );
};

export default Socials;