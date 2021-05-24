import styled from 'styled-components';
import headerBanner from '../../assets/Banners/Header.png';

export const SubHeader = styled.div`
	margin-top: 3.6rem;
	padding: 3rem 5rem;
	height: 15vh;
	width: 100%;

	background-image: url('${headerBanner}');
	background-size: cover;
	background-position: 50% 35%;

	font-size: 2rem;
	text-shadow: 1px 1.5px #1a1a1b;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;
