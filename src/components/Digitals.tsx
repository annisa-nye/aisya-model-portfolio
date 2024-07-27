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
		<section id='digitals' className='pt-header'>
			<div className='flex flex-col md:flex-row gap-8 p-6'>
				<div className='w-full md:w-1/4'>
					{measurementCategories.map((category, categoryIndex) => (
						<div key={categoryIndex} className='mb-4 last:mb-0'>
							<button
								onClick={() => toggleCategory(category.title)}
								className='w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded shadow flex justify-between items-center'
							>
								{category.title}
								{openCategories[category.title] ? (
									<FaChevronUp />
								) : (
									<FaChevronDown />
								)}
							</button>
							{openCategories[category.title] && (
								<ul className='mt-2 bg-white shadow rounded p-4'>
									{category.items.map((measurement, itemIndex) => (
										<li key={itemIndex} className='mb-1 last:mb-0'>
											<span className='font-semibold'>
												{measurement.label}:
											</span>
											<span className='ml-2'>{measurement.value}</span>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
				<div className='w-full md:w-3/4 grid grid-cols-3 gap-4'>
					<img
						src='src/assets/images/p0-digitals/p0-1.jpeg'
						alt='Digital 1'
						className='w-full h-auto object-cover rounded shadow'
					/>
					<img
						src='src/assets/images/p0-digitals/p0-3.jpeg'
						alt='Digital 2'
						className='w-full h-auto object-cover rounded shadow'
					/>
					<img
						src='src/assets/images/p0-digitals/p0-2.jpeg'
						alt='Digital 3'
						className='w-full h-auto object-cover rounded shadow'
					/>
					<img
						src='src/assets/images/p0-digitals/p0-4.jpeg'
						alt='Digital 4'
						className='w-full h-auto object-cover rounded shadow'
					/>
					<img
						src='src/assets/images/p0-digitals/p0-6.jpeg'
						alt='Digital 5'
						className='w-full h-auto object-cover rounded shadow'
					/>
					<img
						src='src/assets/images/p0-digitals/p0-4.jpeg'
						alt='Digital 6'
						className='w-full h-auto object-cover rounded shadow'
					/>
				</div>
			</div>
		</section>
	);
};

export default Digitals;
