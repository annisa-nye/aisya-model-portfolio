import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

const Header: React.FC = () => {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		Events.scrollEvent.register('begin', function (to, element) {
			setActiveSection(to);
		});

		Events.scrollEvent.register('end', function (to, element) {
			setActiveSection(to);
		});

		return () => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		};
	}, []);

	return (
		<header>
			<div className='w-full flex justify-center'>
				<nav className='w-full h-auto fixed top-0 p-3 bg-white z-50'>
					<ul className='flex justify-end text-red-600'>
						<li
							className={`mx-2 ${
								activeSection === 'hero' ? 'font-semibold text-red-800' : ''
							}`}
						>
							<Link
								to='hero'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-red-800'
							>
								Home
							</Link>
						</li>
						<li
							className={`mx-2 ${
								activeSection === 'portfolio' ? 'font-semibold text-red-800' : ''
							}`}
						>
							<Link
								to='portfolio'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-red-800'
							>
								Portfolio
							</Link>
						</li>
						<li
							className={`mx-2 ${
								activeSection === 'digitals' ? 'font-semibold text-red-800' : ''
							}`}
						>
							<Link
								to='digitals'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-red-800'
							>
								Digitals
							</Link>
						</li>
						<li
							className={`mx-2 ${
								activeSection === 'contact' ? 'font-semibold text-red-800' : ''
							}`}
						>
							<Link
								to='contact'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-red-800'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
