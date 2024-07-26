import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className='w-full'>
			<nav className='w-full fixed h-12 bg-slate-700 bg-opacity-55 border-rose-500 border-2 rounded-md p-3'>
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
		</header>
	);
};

export default Header;
