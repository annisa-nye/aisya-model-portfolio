import React from "react";

interface WorkExpTilesProps {
  expIds: string[];
}

const WorkExpTiles: React.FC<WorkExpTilesProps> = ({ expIds }) => {
  return (
    <div className="work-exp w-full">
      <h2 className="sticky top-0 z-10 bg-white p-6 text-xl font-bold text-white sm:pb-2 sm:pl-2 sm:pt-4 sm:text-xl">
        Work Experience
      </h2>
      <div className="work-exp-tiles relative mb-16 mt-16 flex w-full items-center justify-center">
        {expIds.map((expId, index) => (
          <div
            key={expId}
            id={expId}
            className={`work-exp-tile relative mx-2 inline-block h-[25em] w-[20em] bg-[url('./assets/images/p2-pink-blue/p2-2.jpeg')] bg-cover bg-fixed bg-top bg-no-repeat ${index === 0 ? "mt-[-5em]" : ""} ${index === 1 ? "mt-0" : ""} ${index === 2 ? "mb-[-5em]" : ""} xs:w-[14em] sm:w-[16em]`}
          >
            <div className="landing-overlay absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExpTiles;
