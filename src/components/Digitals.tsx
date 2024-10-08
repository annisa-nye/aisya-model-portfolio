import React, { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface Measurement {
  label: string;
  value: string;
}

interface MeasurementCategory {
  title: string;
  items: Measurement[];
}

// Import all digital images
const digitalImages = import.meta.glob(
  "/src/assets/images/p0-digitals/*.jpeg",
  { eager: true },
);

const Digitals: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState<number | null>(null);

  const measurementCategories: MeasurementCategory[] = [
    {
      title: "Measurements",
      items: [
        { label: "Height", value: "170cm" },
        { label: "Bust", value: "86cm" },
        { label: "Waist", value: "61cm" },
        { label: "Hips", value: "92cm" },
      ],
    },
    {
      title: "Features",
      items: [
        { label: "Hair", value: "Brown" },
        { label: "Eyes", value: "Brown" },
      ],
    },
    {
      title: "Size",
      items: [
        { label: "Clothing", value: "6/8 AU" },
        { label: "Shoe", value: "39 EU" },
      ],
    },
  ];

  const carouselImages = useMemo(() => {
    return Object.entries(digitalImages)
      .filter(([path]) => path.includes("p0-"))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([_, module]) => (module as { default: string }).default)
      .slice(0, 3);
  }, []);

  const additionalImages = useMemo(() => {
    return Object.entries(digitalImages)
      .filter(([path]) => path.includes("p0-"))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([_, module]) => (module as { default: string }).default)
      .slice(3);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  const openFullScreenImage = (index: number) => {
    setFullScreenImage(index);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <section id="digitals" className="bg-white">
      <h2 className="bg-white px-6 py-4 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-2 sm:pl-2 sm:pt-4 sm:text-2xl">
        Digitals
      </h2>
      <div className="grid grid-cols-5 gap-4 p-4 xs:grid-cols-3 xs:grid-rows-3">
        <div className="relative col-span-2 row-span-2 pl-2 pt-1 xs:col-span-3 xs:row-span-3">
          <img
            src={carouselImages[currentImage]}
            alt={`Digital ${currentImage + 1}`}
            className="h-full w-full object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4 pt-1 xs:col-span-3 xs:row-span-3">
          {measurementCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold sm:text-sm">
                  {category.title}
                </h3>
                <div className="my-1 h-px bg-gray-300"></div>
                <ul className="space-y-1 py-2">
                  {category.items.map((measurement, itemIndex) => (
                    <li key={itemIndex} className="text-sm sm:text-[0.75rem]">
                      <span className="font-semibold">
                        {measurement.label}:
                      </span>
                      <span className="ml-1">{measurement.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {additionalImages.map((imageSrc, index) => (
          <div className="md:col-span-4" key={index}>
            <img
              src={imageSrc}
              alt={`Digital ${index + 4}`}
              className="h-full w-full cursor-pointer object-cover"
              onClick={() => openFullScreenImage(index)}
            />
          </div>
        ))}
      </div>
      {fullScreenImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <img
            src={additionalImages[fullScreenImage]}
            alt={`Full-screen Digital ${fullScreenImage + 4}`}
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={closeFullScreenImage}
            className="absolute right-4 top-4 text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
};

export default Digitals;
