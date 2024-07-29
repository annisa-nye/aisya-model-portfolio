import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface Measurement {
	label: string;
	value: string;
}

interface MeasurementCategory {
	title: string;
	items: Measurement[];
}

const Digitals: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [fullScreenImage, setFullScreenImage] = useState<number | null>(null);

	const measurementCategories: MeasurementCategory[] = [
		{
			title: 'Measurements',
			items: [
				{ label: 'Height', value: '170cm' },
				{ label: 'Bust', value: '86cm' },
				{ label: 'Waist', value: '61cm' },
				{ label: 'Hips', value: '92cm' },
			],
		},
		{
			title: 'Features',
			items: [
				{ label: 'Hair', value: 'Brown' },
				{ label: 'Eyes', value: 'Brown' },
			],
		},
		{
			title: 'Size',
			items: [
				{ label: 'Clothing', value: '6/8 AU' },
				{ label: 'Shoe', value: '39 EU' },
			],
		},
	];

	const carouselImages = [1, 2, 3];

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % carouselImages.length);
	};

	const prevImage = () => {
		setCurrentImage(
			(prev) => (prev - 1 + carouselImages.length) % carouselImages.length
		);
	};

	const openFullScreenImage = (index: number) => {
		setFullScreenImage(index);
	};

	const closeFullScreenImage = () => {
		setFullScreenImage(null);
	};

	return (
		<section id='digitals' className='min-h-screen'>
			<h2 className='text-2xl font-bold p-4 sticky top-0 bg-white z-10'>
				Digitals
			</h2>
			<div className='p-4 grid grid-cols-5 gap-4 xs:grid-cols-3 xs:grid-rows-3'>
				<div className='col-span-2 row-span-2 xs:col-span-3 xs:row-span-3 relative pl-2'>
					<img
						src={`src/assets/images/p0-digitals/p0-${carouselImages[currentImage]}.jpeg`}
						alt={`Digital ${currentImage + 1}`}
						className='object-cover w-full h-full'
					/>
					<button
						onClick={prevImage}
						className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full'
					>
						<FaChevronLeft />
					</button>
					<button
						onClick={nextImage}
						className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full'
					>
						<FaChevronRight />
					</button>
				</div>
				<div className='col-span-3 grid grid-cols-3 gap-4 xs:col-span-3 xs:row-span-3'>
					{measurementCategories.map((category, categoryIndex) => (
						<div
							key={categoryIndex}
							className='flex flex-col justify-between h-full'
						>
							<div>
								<h3 className='text-lg font-semibold xs:text-sm'>
									{category.title}
								</h3>
								<div className='h-px bg-gray-300 my-1'></div>
								<ul className='space-y-1 py-2 xs:text-sm'>
									{category.items.map((measurement, itemIndex) => (
										<li key={itemIndex} className=''>
											<span className='font-medium'>{measurement.label}:</span>
											<span className='ml-1'>{measurement.value}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				{[0, 1, 2].map((index) => (
					<div className='md:col-span-4' key={index}>
						<img
							src={`src/assets/images/p0-digitals/p0-${index + 4}.jpeg`}
							alt={`Digital ${index + 4}`}
							className='w-full h-full object-cover cursor-pointer'
							onClick={() => openFullScreenImage(index)}
						/>
					</div>
				))}
			</div>
			{fullScreenImage !== null && (
				<div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
					<img
						src={`src/assets/images/p0-digitals/p0-${fullScreenImage + 4}.jpeg`}
						alt={`Full-screen Digital ${fullScreenImage + 4}`}
						className='max-w-full max-h-full object-contain'
					/>
					<button
						onClick={closeFullScreenImage}
						className='absolute top-4 right-4 text-white text-2xl'
					>
						<FaTimes />
					</button>
				</div>
			)}
		</section>
	);
};

export default Digitals;
