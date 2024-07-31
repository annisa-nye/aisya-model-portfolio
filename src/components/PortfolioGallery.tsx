import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface PortfolioItem {
	title: string;
	folderName: string;
}

const portfolioItems: PortfolioItem[] = [
	{ title: 'Red and Yellow', folderName: 'p1-red-yellow' },
	{ title: 'Pink and Blue', folderName: 'p2-pink-blue' },
	{ title: 'Black and White', folderName: 'p3-black-white' },
	{ title: 'Pink and Cream', folderName: 'p4-pink-cream' },
	{ title: 'Multicolour', folderName: 'p5-multicolour' },
	{ title: 'Magazine', folderName: 'p6-magazine' },
	{ title: 'Runway', folderName: 'p7-runway' },
	{ title: 'Indonesian', folderName: 'p8-indonesian' },
];

const PortfolioGallery: React.FC = () => {
	const [fullscreenImage, setFullscreenImage] = useState<{
		folder: string;
		index: number;
	} | null>(null);

	const openFullscreen = (folder: string, index: number) => {
		setFullscreenImage({ folder, index });
	};

	const closeFullscreen = () => {
		setFullscreenImage(null);
	};

	const nextImage = () => {
		if (fullscreenImage) {
			setFullscreenImage((prev) => ({
				...prev!,
				index: (prev!.index + 1) % 6, // Assuming 6 images per folder
			}));
		}
	};

	const prevImage = () => {
		if (fullscreenImage) {
			setFullscreenImage((prev) => ({
				...prev!,
				index: (prev!.index - 1 + 6) % 6, // Assuming 6 images per folder
			}));
		}
	};

	return (
    <section id="portfolio" className="min-h-screen w-full font-inter">
      <div className="sticky top-0 z-10 bg-white">
        <h2 className="p-4 text-xl font-bold sm:text-xl">
          Portfolio
        </h2>
      </div>
      <div className="w-full">
        {portfolioItems.map((item, rowIndex) => (
          <div key={rowIndex} className="mb-8">
            <h3 className="p-2 text-lg font-semibold">{item.title}</h3>
            <div className="flex overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((imgIndex) => (
                <div
                  key={imgIndex}
                  className="m-2 h-64 w-64 flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
                  onClick={() => openFullscreen(item.folderName, imgIndex - 1)}
                >
                  <img
                    src={`src/assets/images/${item.folderName}/${
                      item.folderName.split("-")[0]
                    }-${imgIndex}.jpeg`}
                    alt={`${item.title} ${imgIndex}`}
                    className="h-full w-full cursor-pointer object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <img
            src={`src/assets/images/${fullscreenImage.folder}/${
              fullscreenImage.folder.split("-")[0]
            }-${fullscreenImage.index + 1}.jpeg`}
            alt={`Fullscreen ${fullscreenImage.folder} ${
              fullscreenImage.index + 1
            }`}
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={closeFullscreen}
            className="absolute right-4 top-4 text-2xl text-white"
          >
            <FaTimes />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
