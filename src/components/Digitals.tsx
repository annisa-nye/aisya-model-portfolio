import React from 'react';

const Digitals: React.FC = () => (
	<section className='w-full p-10 border-slate-950 border-2'>
			<div className='flex flex-row justify-around'>
				<div className='p-5'>
					<h2 className='text-xl font-bold py-2'>Features</h2>
					<ul>
						<li>
							<strong>Hair: </strong>Brown
						</li>
						<li>
							<strong>Eyes: </strong>Brown
						</li>
					</ul>
				</div>
				<div className='p-5'>
					<h2 className='text-xl font-bold py-2'>Measurements</h2>
					<ul>
						<li>
							<strong>Height: </strong>170cm
						</li>
						<li>
							<strong>Bust: </strong>86cm
						</li>
						<li>
							<strong>Waist: </strong>61cm
						</li>
						<li>
							<strong>Hips: </strong>92cm
						</li>
					</ul>
				</div>
				<div className='p-5'>
					<h2 className='text-xl font-bold py-2'>Size</h2>
					<ul>
						<li>
							<strong>Clothing: </strong>6/8 AU
						</li>
						<li>
							<strong>Shoe: </strong>39 EU
						</li>
					</ul>
				</div>
			</div>
			<div className='p-5 md:p-10'>
				<div className='columns-3 gap-5 [&>img:not(:first-child):mt-5'>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-1.jpeg'
						alt='digitals 1'
					/>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-2.jpeg'
						alt='digitals 2'
					/>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-3.jpeg'
						alt='digitals 3'
					/>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-4.jpeg'
						alt='digitals 4'
					/>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-5.jpeg'
						alt='digitals 5'
					/>
					<img
						className='object-contain'
						src='src/assets/images/p0-digitals/p0-6.jpeg'
						alt='digitals 6'
					/>
				</div>
			</div>
	</section>
);

export default Digitals;
