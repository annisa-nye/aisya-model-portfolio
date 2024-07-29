import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PortfolioGallery from './components/PortfolioGallery';
import Digitals from './components/Digitals';
import ContactForm from './components/ContactForm';
import WorkExpTiles from './components/WorkExpTiles';
function App() {
	return (
		<Router>
			<div className='App'>
				<Header />

				<main>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<HeroSection />
									<WorkExpTiles expIds={['wexp-1', 'wexp-2', 'wexp-3']} />
									
									<PortfolioGallery />
									<Digitals />
									<ContactForm />
								</>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
