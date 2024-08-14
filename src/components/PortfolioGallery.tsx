import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import all images
const imageModules = import.meta.glob("/src/assets/images/**/*.jpeg", {
  eager: true,
});

interface PortfolioItem {
  title: string;
  folderName: string;
  description: string;
  coverImage: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Red and Yellow",
    folderName: "p1-red-yellow",
    description: "A vibrant shoot featuring bold red and yellow tones.",
    coverImage: "/src/assets/images/p1-red-yellow/p1-2.jpeg",
  },
  {
    title: "Pink and Blue",
    folderName: "p2-pink-blue",
    description: "Soft pastels meet in this dreamy pink and blue themed shoot.",
    coverImage: "/src/assets/images/p2-pink-blue/p2-3.jpeg",
  },
  {
    title: "Pink and Cream",
    folderName: "p4-pink-cream",
    description: "Delicate and feminine shoot with pink and cream hues.",
    coverImage: "/src/assets/images/p4-pink-cream/p4-1.jpeg",
  },
  {
    title: "Multicolour",
    folderName: "p5-multicolour",
    description: "Explosion of colors in this diverse and dynamic shoot.",
    coverImage: "/src/assets/images/p5-multicolour/p5-5.jpeg",
  },
  {
    title: "Magazine",
    folderName: "p6-magazine",
    description: "Editorial-style shoot ready for the glossy pages.",
    coverImage: "/src/assets/images/p6-magazine/p6-2.jpeg",
  },
  {
    title: "Runway",
    folderName: "p7-runway",
    description:
      "High fashion meets the catwalk in this runway-inspired shoot.",
    coverImage: "/src/assets/images/p7-runway/p7-1.jpeg",
  },
  {
    title: "Indonesian",
    folderName: "p8-indonesian",
    description: "Celebrating Indonesian culture and traditional fashion.",
    coverImage: "/src/assets/images/p8-indonesian/p8-4.jpeg",
  },
  {
    title: "Black and White",
    folderName: "p3-black-white",
    description: "Classic monochrome photography with striking contrasts.",
    coverImage: "/src/assets/images/p3-black-white/p3-5.jpeg",
  },
].map((item) => ({
  ...item,
  coverImage: (imageModules[item.coverImage] as { default: string }).default,
}));

const PortfolioGallery: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewportWidth <= 640;
  const gridColumns = isMobile ? 2 : 4;
  const gridRows = Math.ceil(portfolioItems.length / gridColumns);
  const cardHeight = (viewportHeight - 100) / gridRows;

  const openModal = async (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);

    const folderImages = Object.entries(imageModules)
      .filter(([path]) => path.includes(item.folderName))
      .map(([_, module]: [string, any]) => module.default);

    setImages(folderImages);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setImages([]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <section
      id="portfolio"
      className="section-padding flex min-h-screen w-full flex-col font-inter"
    >
      <h2 className="bg-white px-6 py-4 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-2 sm:pl-2 sm:pt-4 sm:text-2xl">
        Portfolio
      </h2>
      <div
        className={`grid flex-grow gap-4 p-4 ${
          isMobile ? "grid-cols-2" : "grid-cols-4"
        }`}
        style={{
          gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
        }}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.folderName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md"
            style={{ height: `${cardHeight}px` }}
            onClick={() => openModal(item)}
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h3 className="mb-2 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <div
              className="relative max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex]}
                  alt={`${selectedItem.title} ${currentImageIndex + 1}`}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
              <button
                className="absolute right-4 top-4 text-2xl text-white"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform text-white">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
