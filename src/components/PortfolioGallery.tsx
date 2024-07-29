import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PortfolioItem {
	title: string;
	folderName: string;
}

const PortfolioCard: React.FC<PortfolioItem> = ({ title, folderName }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = Array.from(
		{ length: 5 },
		(_, i) => `/src/assets/images/${folderName}/${folderName}-${i + 1}.jpg`
	);

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
			<h3 className='text-sm font-semibold p-2 text-center'>{title}</h3>
			<div className='relative flex-grow'>
				<img
					src={images[currentImage]}
					alt={title}
					className='w-full h-full object-cover'
				/>
				<button
					onClick={prevImage}
					className='absolute left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full text-xs'
				>
					<FaChevronLeft />
				</button>
				<button
					onClick={nextImage}
					className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full text-xs'
				>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
};

const PortfolioGallery: React.FC = () => {
	const portfolioItems: PortfolioItem[] = [
		{ title: 'Digitals', folderName: 'p1-digitals' },
		{ title: 'Red and Yellow', folderName: 'p1-red-yellow' },
		{ title: 'Pink and Blue', folderName: 'p2-pink-blue' },
		{ title: 'Black and White', folderName: 'p3-black-white' },
		{ title: 'Pink and Cream', folderName: 'p4-pink-cream' },
		{ title: 'Multicolour', folderName: 'p5-multicolour' },
		{ title: 'Magazine', folderName: 'p6-magazine' },
		{ title: 'Runway', folderName: 'p7-runway' },
	];

	return (
		<section id='portfolio' className='font-inter min-h-screen bg-gray-100'>
			<div className='sticky top-0 z-10'>
				<h2 className='text-xl font-bold p-4 bg-white shadow-md'>Portfolio</h2>
			</div>
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-4 grid-rows-2 gap-4 aspect-[2/1]'>
					{portfolioItems.map((item, index) => (
						<PortfolioCard key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioGallery;
