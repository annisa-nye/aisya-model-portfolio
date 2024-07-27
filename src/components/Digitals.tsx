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
		<section id='digitals' className='pt-header min-h-screen'>
			<div className='flex flex-col lg:flex-row lg:gap-4'>
				<div className='lg:w-1/4'>
					<h2 className='text-2xl font-bold p-4'>Digitals</h2>
					<div className='p-4'>
						<div className='grid grid-cols-1 gap-2'>
							{measurementCategories.map((category, categoryIndex) => (
								<div key={categoryIndex} className='mb-1 last:mb-0'>
									<button
										onClick={() => toggleCategory(category.title)}
										className='w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-1 px-2 rounded shadow flex justify-between items-center text-sm'
									>
										<span className='truncate'>{category.title}</span>
										{openCategories[category.title] ? (
											<FaChevronUp className='flex-shrink-0 ml-1' />
										) : (
											<FaChevronDown className='flex-shrink-0 ml-1' />
										)}
									</button>
									{openCategories[category.title] && (
										<ul className='mt-1 bg-white shadow rounded p-2 text-xs'>
											{category.items.map((measurement, itemIndex) => (
												<li key={itemIndex} className='mb-1 last:mb-0'>
													<span className='font-semibold'>
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
