import React from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

const Socials: React.FC = () => {
  return (
    <section id="socials" className="min-h-screen">
      <h2 className="sticky top-0 z-10 bg-white p-6 text-xl font-bold sm:pb-3 sm:pl-2 sm:pt-4 sm:text-xl">
        Socials
      </h2>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/aisyawiley/"
              width={328}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@icyaish_/video/7362526703668792577?is_from_webapp=1&sender_device=pc&web_id=7334526267851785730"
              width={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
