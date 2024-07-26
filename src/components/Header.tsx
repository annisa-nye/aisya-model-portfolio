import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className=''>
			<div className='w-full flex justify-center'>
				<nav className='w-full h-auto fixed top-0 p-3 bg-white'>
					<ul className='flex justify-end text-red-600'>
						<li className='mx-2'>
							<Link to='/'>Home</Link>
						</li>
						<li className='mx-2'>
							<Link to='/portfolio'>Portfolio</Link>
						</li>
						<li className='mx-2'>
							<Link to='/digitals'>Digitals</Link>
						</li>
						<li className='mx-2'>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
