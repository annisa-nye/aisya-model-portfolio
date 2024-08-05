import React from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

const Socials: React.FC = () => {
  return (
    <section id="socials" className="min-h-screen">
      <h2 className="bg-white px-6 py-4 text-xl font-bold sm:pb-2 sm:pl-2 sm:pt-4 sm:text-xl sm:ml-4">
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
              url="https://www.instagram.com/p/C4M_TjLyu7t/?img_index=1"
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
