import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

	return (
		<section id='digitals' className='min-h-screen'>
			<h2 className='text-2xl font-bold p-4 sticky top-0 bg-white z-10'>
				Digitals
			</h2>
			<div className='p-4 grid grid-cols-5 gap-4 md:grid-cols-4 md:grid-rows-3'>
				<div className='col-span-2 row-span-2 md:col-span-3 md:row-span-3 relative'>
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
				<div className='col-span-3 grid grid-cols-3 gap-4 md:col-span-1 md:row-span-3 md:flex md:flex-col'>
					{measurementCategories.map((category, categoryIndex) => (
						<div
							key={categoryIndex}
							className='flex flex-col justify-between h-full md:h-auto'
						>
							<div>
								<h3 className='text-lg font-semibold xs:text-sm'>
									{category.title}
								</h3>
								<div className='h-px bg-gray-300 my-1'></div>
								<ul className='space-y-1 py-2'>
									{category.items.map((measurement, itemIndex) => (
										<li key={itemIndex} className='text-sm'>
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
							className='w-full h-full object-cover'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Digitals;
