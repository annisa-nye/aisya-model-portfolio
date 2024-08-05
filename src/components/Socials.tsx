import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/aisyawiley/",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@icyaish_?_t=8iHHFg8x3ou&_r=1",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@bubblebaby110",
  },
];

const duration = 0.25;
const stagger = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-white relative block overflow-hidden whitespace-nowrap text-9xl font-bold uppercase xs:text-2xl sm:text-8xl"
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
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
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
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

export const SocialsLinks: React.FC = () => {
  return (
    <section id="socials">
      <h2 className="bg-white px-6 py-6 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-2 sm:pl-2 sm:pt-4 sm:text-2xl">
        Socials
      </h2>
      <div className="grid h-screen place-content-center gap-2 bg-red-600 px-8 font-inter text-white">
        {socialLinks.map((social) => (
          <FlipLink key={social.platform} href={social.url}>
            {social.platform}
          </FlipLink>
        ))}
      </div>
    </section>
  );
};

export default SocialsLinks;
