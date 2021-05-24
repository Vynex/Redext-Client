import styled from 'styled-components';
import profileBanner from '../../../../assets/Banners/Profile.png';

export const AboutHeader = styled.div`
	height: 6rem;
	width: 100%;

	border-radius: 5px 5px 0 0;
`;

export const AboutBanner = styled.div`
	height: 100%;
	width: 100%;

	background-image: url('${profileBanner}');
	background-position: 30%;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const AboutAvatar = styled.div`
	text-align: center;

	position: relative;
	top: -60%;
`;

export const SnooAvatar = styled.img`
	width: 8rem;
`;

export const AboutContent = styled.div`
	margin-top: 9rem;
	padding: 1rem;
	font-size: 1.1rem;
`;

export const AboutSection = styled.div`
	margin: 1rem 0;
`;

export const AboutTitle = styled.div`
	font-size: 1.4rem;
	text-align: center;
`;

export const AboutSubTitle = styled.div`
	color: #818384;
	font-size: 0.9rem;
	font-weight: 600;

	text-align: center;
`;

export const AboutSubSection = styled.div`
   margin: 1rem 0;
	display: flex;
	justify-content: space-between;
`;

export const Attribute = styled.div`
`;

export const AttributeTitle = styled.div`
   margin: 0.2rem 0;
`;

export const AttributeContent = styled.div`
	color: #818384;
	display: flex;
	align-items: center;
`;
