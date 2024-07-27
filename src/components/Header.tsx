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
			<div className='font-inter w-full flex justify-center'>
				<nav className='w-full h-auto fixed top-0 pt-4 pr-1 z-50 xs:pt-5'>
					<ul className='flex justify-end text-red-500 text-lg xs:text-sm'>
						<li
							className={`mx-2 xs:mx-1 ${
								activeSection === 'hero' ? 'font-semibold text-red-700' : ''
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
							className={`mx-2 xs:mx-1 ${
								activeSection === 'portfolio'
									? 'font-semibold text-red-700'
									: ''
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
							className={`mx-2 xs:mx-1 ${
								activeSection === 'digitals' ? 'font-semibold text-red-700' : ''
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
							className={`mx-2 xs:mx-1 ${
								activeSection === 'contact' ? 'font-semibold text-red-700' : ''
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
