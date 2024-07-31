import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isDesktop = viewportWidth > 1024;

	return (
		<section
			id='hero'
			className={`w-full h-screen relative ${isDesktop ? 'flex' : ''}`}
		>
			{isDesktop && (
				<div
					className='w-1/4 absolute left-0 top-0 bottom-0'
					style={{ backgroundColor: 'rgb(5, 14, 10)' }}
				></div>
			)}
			<div
				className={`
          ${isDesktop ? 'w-3/4 ml-auto' : 'w-full'}
          h-full bg-[url('./assets/images/p1-red-yellow/p1-3.jpeg')] bg-cover relative
        `}
				style={{
					backgroundPosition: '10% 0%',
				}}
			></div>
			<h1 className='font-lora text-xxl text-white absolute top-4 left-4 z-10'>
				Aisya
				<br />
				Wiley
			</h1>
		</section>
	);
};

export default HeroSection;
