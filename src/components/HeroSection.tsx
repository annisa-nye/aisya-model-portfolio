import React from 'react';

const HeroSection: React.FC = () => {
	const smallScreenStyle = window.matchMedia('(max-width: 500px)').matches
		? { backgroundPosition: '20% 0%' }
		: {};

	return (
		<section
			id='hero'
			className="w-full h-screen px-3 border-slate-950 border-2 bg-[url('./assets/images/p1-red-yellow/p1-3.jpg')] bg-cover bg-fixed"
			style={smallScreenStyle}
		>
			<div className='pt-32 text-start text-red-500 sticky top-0 xs:pt-25'>
				<h1 className='font-lora text-7xl py-4 inline-block xs:text-6xl'>Aisya Wiley</h1>
				<p className='text-2xl pb-4 font-inter'>Model</p>
			</div>
			<div className='text-white'></div>
		</section>
	);
};

export default HeroSection;
