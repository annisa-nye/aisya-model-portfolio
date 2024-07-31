import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface PortfolioItem {
  title: string;
  folderName: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Red and Yellow", folderName: "p1-red-yellow" },
  { title: "Pink and Blue", folderName: "p2-pink-blue" },
  { title: "Black and White", folderName: "p3-black-white" },
  { title: "Pink and Cream", folderName: "p4-pink-cream" },
  { title: "Multicolour", folderName: "p5-multicolour" },
  { title: "Magazine", folderName: "p6-magazine" },
  { title: "Runway", folderName: "p7-runway" },
  { title: "Indonesian", folderName: "p8-indonesian" },
];

const PortfolioGallery: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: string[] }>({});
  const [fullscreenImage, setFullscreenImage] = useState<{
    folder: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob("/src/assets/images/**/*.jpeg");
      const loadedImages: { [key: string]: string[] } = {};

      for (const path in imageModules) {
        const folderName = path.split("/")[4];
        if (!loadedImages[folderName]) {
          loadedImages[folderName] = [];
        }
        const module = await imageModules[path]();
        loadedImages[folderName].push(module.default);
      }

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  const openFullscreen = (folder: string, index: number) => {
    setFullscreenImage({ folder, index });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextImage = () => {
    if (fullscreenImage) {
      const folderImages = images[fullscreenImage.folder];
      setFullscreenImage((prev) => ({
        ...prev!,
        index: (prev!.index + 1) % folderImages.length,
      }));
    }
  };

  const prevImage = () => {
    if (fullscreenImage) {
      const folderImages = images[fullscreenImage.folder];
      setFullscreenImage((prev) => ({
        ...prev!,
        index: (prev!.index - 1 + folderImages.length) % folderImages.length,
      }));
    }
  };

  return (
    <section id="portfolio" className="min-h-screen w-full font-inter">
      <h2 className="sticky top-0 z-10 bg-white p-6 text-xl font-bold sm:text-xl sm:pt-4 sm:pb-2 sm:pl-2">
        Portfolio
      </h2>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="flex w-auto"
        columnClassName="bg-clip-padding"
      >
        {portfolioItems.flatMap((item) =>
          (images[item.folderName] || []).map((imageSrc, imgIndex) => (
            <motion.div
              key={`${item.folderName}-${imgIndex}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative m-2 overflow-hidden"
              onClick={() => openFullscreen(item.folderName, imgIndex)}
            >
              <img
                src={imageSrc}
                alt={`${item.title} ${imgIndex + 1}`}
                className="w-full cursor-pointer object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
              >
                <p className="text-center font-semibold">{item.title}</p>
              </motion.div>
            </motion.div>
          )),
        )}
      </Masonry>

      {fullscreenImage && images[fullscreenImage.folder] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        >
          <img
            src={images[fullscreenImage.folder][fullscreenImage.index]}
            alt={`Fullscreen ${fullscreenImage.folder} ${fullscreenImage.index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeFullscreen}
            className="absolute right-4 top-4 text-2xl text-white"
          >
            <FaTimes />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioGallery;
