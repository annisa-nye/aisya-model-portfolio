import React, { useState } from 'react';
import {
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelope,
	FaFacebookF,
	FaTwitter,
	FaGithub,
	FaDribbble,
} from 'react-icons/fa';

const Contact: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', { name, email, message });
	};

	return (
		<section id="contact">
			<div className='m-2 flex justify-between p-8 bg-gray-900 text-white min-h-screen'>
				<div className='w-1/3'>
					<h2 className='text-2xl font-bold mb-6'>Contact Info</h2>
					<div className='mb-4 flex items-center'>
						<FaMapMarkerAlt className='mr-2' />
						<span>5B Streat, City 50987 New Town US</span>
					</div>
					<div className='mb-4 flex items-center'>
						<FaPhone className='mr-2' />
						<span>+32 (0) 333 444 555</span>
					</div>
					<div className='mb-8 flex items-center'>
						<FaEnvelope className='mr-2' />
						<span>htmlstream@support.com</span>
					</div>

					<h2 className='text-2xl font-bold mb-4'>Social Networks</h2>
					<div className='flex space-x-4'>
						<FaFacebookF className='hover:text-blue-500 cursor-pointer' />
						<FaTwitter className='hover:text-blue-400 cursor-pointer' />
						<FaGithub className='hover:text-gray-400 cursor-pointer' />
						<FaDribbble className='hover:text-pink-500 cursor-pointer' />
					</div>
				</div>

				<div className='w-2/3 border border-gray-700 p-8'>
					<h2 className='text-3xl font-bold mb-6'>Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='w-full bg-transparent border-b border-gray-700 p-2 mb-4 focus:outline-none focus:border-white'
						/>
						<input
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full bg-transparent border-b border-gray-700 p-2 mb-4 focus:outline-none focus:border-white'
						/>
						<textarea
							placeholder='Message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='w-full bg-transparent border-b border-gray-700 p-2 mb-6 focus:outline-none focus:border-white'
							rows={4}
						/>
						<button
							type='submit'
							className='bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
