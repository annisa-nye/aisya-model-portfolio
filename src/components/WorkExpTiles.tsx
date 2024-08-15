import React from "react";
import { motion } from "framer-motion";

interface WorkExpTilesProps {
  expIds: string[];
}

const WorkExpTiles: React.FC<WorkExpTilesProps> = ({ expIds }) => {
  return (
    <div className="work-exp w-full overflow-hidden">
      <h2 className="bg-white px-6 py-4 text-4xl font-bold text-white xs:text-xl sm:ml-4 sm:pb-2 sm:pl-2 sm:pt-4 sm:text-2xl">
        Work
      </h2>
      <motion.div
        className="work-exp-tiles relative mb-16 mt-16 flex w-full items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {expIds.map((expId, index) => (
          <motion.div
            key={expId}
            id={expId}
            className={`work-exp-tile relative mx-2 inline-block bg-[url('./assets/images/p2-pink-blue/p2-2.jpeg')] bg-cover bg-fixed bg-top bg-no-repeat ${index === 0 ? "mt-[-5vh]" : ""} ${index === 1 ? "mt-0" : ""} ${index === 2 ? "mb-[-5vh]" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              width: "100%",
              height: "100vh",
              maxWidth: "20em",
            }}
          >
            <motion.div
              className="landing-overlay absolute inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExpTiles;
