import React from 'react';

const HeroSection: React.FC = () => (
	<section className="w-full h-screen p-10 border-slate-950 border-2 bg-[url('./assets/images/p1-red-yellow/p1-3.jpg')] bg-cover bg-fixed">
		<div className='py-20 text-start text-blue-300'>
			<h1 className='text-7xl'>Aisya Wiley</h1>
			<p className='text-2xl'>Model</p>
		</div>
		<div>
			<p>Brief tagline about Aisya</p>
			<p>I'm a model!</p>
		</div>
	</section>
);

export default HeroSection;
