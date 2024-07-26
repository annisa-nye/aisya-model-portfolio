import React from 'react';

const Digitals: React.FC = () => (
	<section className='w-full p-10 border-slate-950 border-2'>
		<div>
			<h2 className='text-xl'>Features</h2>
			<ul>
				<li>Hair: Brown</li>
				<li>Eyes: Brown</li>
			</ul>
		</div>
		<div>
			<h2 className='text-xl'>Measurements</h2>
			<ul>
				<li>Height: 170cm </li>
				<li>Bust: 86cm</li>
				<li>Waist: 61cm</li>
				<li>Hips: 92cm</li>
			</ul>
		</div>
		<div>
			<h2 className='text-xl'>Size</h2>
			<ul>
				<li>Clothing: 6/8 AU</li>
				<li>Shoe: 39 EU</li>
			</ul>
		</div>
	</section>
);

export default Digitals;
