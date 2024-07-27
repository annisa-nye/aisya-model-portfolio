import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
	position: relative;
	background: url('path/to/your/hero-image.jpg') no-repeat center center/cover;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Overlay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-width: 600px;
`;

const SpotifyEmbed = styled.iframe`
  border-radius: 12px;
  width: 100%;
  height: 152px;
  border: 0;
  allow: autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;
  loading: lazy;
`;

const Hero: React.FC = () => {
	return (
		<HeroSection>
			<Overlay>
				<SpotifyEmbed src='https://open.spotify.com/embed/track/1Ar2McJ98hNvgsHlxLTPQc?utm_source=generator' />
			</Overlay>
		</HeroSection>
	);
};

export default Hero;
