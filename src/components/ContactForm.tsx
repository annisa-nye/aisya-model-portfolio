import React from 'react';

const ContactForm: React.FC = () => (
	<section className='w-full p-10 border-red-500 border-2'>
		<h2>Contact</h2>
		<form>
			<input type='text' name='name' placeholder='Your Name' required />
			<input type='email' name='email' placeholder='Your Email' required />
			<textarea name='message' placeholder='Your Message' required></textarea>
			<button type='submit'>Send</button>
		</form>
	</section>
);

export default ContactForm;
