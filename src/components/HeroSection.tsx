import React from 'react';

const HeroSection: React.FC = () => (
	<section id="hero" className="w-full h-screen px-3 border-slate-950 border-2 bg-[url('./assets/images/p1-red-yellow/p1-3.jpg')] bg-cover bg-fixed">
		<div className='font-lora pt-36 text-start text-white sticky top-0'>
			<h1 className='text-7xl py-4'>Aisya Wiley</h1>
			<p className='text-2xl pb-4'>Model</p>
		</div>
		<div className='text-white'>
		</div>
	</section>
);

export default HeroSection;
