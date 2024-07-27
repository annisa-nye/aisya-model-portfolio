import React from 'react';

const HeroSection: React.FC = () => (
	<section id="hero" className="w-full h-screen py-5 px-3 my-14 border-slate-950 border-2 bg-[url('./assets/images/p1-red-yellow/p1-3.jpg')] bg-cover bg-fixed">
		<div className='font-lora py-10 text-start text-white'>
			<h1 className='text-7xl'>Aisya Wiley</h1>
			<p className='text-2xl'>Model</p>
		</div>
		<div className='text-white'>
			<p>Brief tagline about Aisya</p>
			<p>I'm a model!</p>
		</div>
	</section>
);

export default HeroSection;
