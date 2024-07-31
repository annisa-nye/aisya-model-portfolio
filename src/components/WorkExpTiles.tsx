import React from 'react';

interface WorkExpTilesProps {
	expIds: string[];
}

const WorkExpTiles: React.FC<WorkExpTilesProps> = ({ expIds }) => {
	return (
		<div className='work-exp w-full'>
			<h2 className='text-xl text-white font-bold p-4 sticky top-0 bg-white z-10 sm:text-xl'>
				Digitals
			</h2>
			<div className='work-exp-tiles relative w-full mb-16 mt-16 flex justify-center items-center'>
				{expIds.map((expId, index) => (
					<div
						key={expId}
						id={expId}
						className={`
                                work-exp-tile relative h-[25em] w-[20em] mx-2 inline-block
                                bg-[url('./assets/images/p2-pink-blue/p2-2.jpeg')] bg-top bg-no-repeat bg-cover bg-fixed
                                ${index === 0 ? 'mt-[-5em]' : ''}
                                ${index === 1 ? 'mt-0' : ''}
                                ${index === 2 ? 'mb-[-5em]' : ''}
                            `}
					>
						<div className='landing-overlay absolute inset-0 bg-black bg-opacity-30'></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkExpTiles;
