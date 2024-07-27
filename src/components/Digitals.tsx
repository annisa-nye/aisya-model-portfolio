import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Measurement {
	label: string;
	value: string;
}

interface MeasurementCategory {
	title: string;
	items: Measurement[];
}

const Digitals: React.FC = () => {
	const [openCategories, setOpenCategories] = useState<{
		[key: string]: boolean;
	}>({});

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

	const toggleCategory = (title: string) => {
		setOpenCategories((prev) => ({ ...prev, [title]: !prev[title] }));
	};

	return (
		<section id='digitals' className='min-h-screen'>
			<h2 className='text-2xl font-bold p-4 sticky top-0'>Digitals</h2>
			<div className='flex flex-col lg:flex-row lg:gap-4'>
				<div className='lg:w-1/4'>
					<div className='p-4'>
						<div className='space-y-4'>
							{measurementCategories.map((category, categoryIndex) => (
								<div key={categoryIndex}>
									<div
										onClick={() => toggleCategory(category.title)}
										className='flex items-center justify-between cursor-pointer'
									>
										<h3 className='text-lg font-semibold'>{category.title}</h3>
										{openCategories[category.title] ? (
											<FaChevronUp className='text-gray-500' />
										) : (
											<FaChevronDown className='text-gray-500' />
										)}
									</div>
									<div className='h-px bg-gray-300 my-2'></div>
									{openCategories[category.title] && (
										<ul className='mt-2 space-y-1'>
											{category.items.map((measurement, itemIndex) => (
												<li key={itemIndex} className='text-sm'>
													<span className='font-medium'>
														{measurement.label}:
													</span>
													<span className='ml-1'>{measurement.value}</span>
												</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='lg:w-3/4'>
					<div className='grid grid-cols-3 gap-2'>
						{[1, 3, 2, 4, 6, 4].map((num, index) => (
							<div key={index} className='aspect-w-3 aspect-h-4'>
								<img
									src={`src/assets/images/p0-digitals/p0-${num}.jpeg`}
									alt={`Digital ${index + 1}`}
									className='object-cover w-full h-full'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Digitals;
