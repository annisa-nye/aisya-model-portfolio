import React from 'react';

const Digitals: React.FC = () => (
	<section className='w-full p-10 border-slate-950 border-2'>
		<div className='flex'>
			<div>
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
			<div className='w-full h-auto flex'>
				<img
					className='object-contain h-96 w-64'
					src='src/assets/images/p0-digitals/p0-1.jpeg'
					alt='digitals 1'
				/>
				<img
					className='object-contain h-96 w-64'
					src='src/assets/images/p0-digitals/p0-2.jpeg'
					alt='digitals 1'
				/>
				<img
					className='object-contain h-96 w-64'
					src='src/assets/images/p0-digitals/p0-3.jpeg'
					alt='digitals 1'
				/>
			</div>
		</div>
	</section>
);

export default Digitals;
