import styled from 'styled-components';
import aboutBanner from '../../../assets/Banners/About.png';
import rulesBanner from '../../../assets/Banners/Rules.png';

export const InfoBox = styled.div`
	width: 90%;
	margin: 1em 0 2em 0;

	font-size: 1.1em;
	background-color: #1a1a1b;

	border: 1px solid #343536;
	border-radius: 5px;
`;

export const SubHeader = styled.div`
	height: 50px;
	padding: 1rem;

	background-color: white;
	background-image: url('${aboutBanner}');
	background-position: 50% 55%;
	background-size: cover;
	background-repeat: no-repeat;

	border-radius: 5px;
`;

export const RulesHeader = styled.div`
	height: 60px;
	padding: 15px 10px;

	background-color: white;
	background-image: url('${rulesBanner}');
	background-position: 50% 25%;
	background-size: cover;
	background-repeat: no-repeat;

	border-radius: 5px;
`;

export const InfoContent = styled.div`
	padding: 1em;
	height: 100%;
`;

export const SubTitle = styled.div`
	padding: 0.6em 0.5em 0.8em 0.5em;
	font-size: 1.2em;
	font-weight: 600;

	border-bottom: 1px solid #343536;
	display: flex;
	align-items: center;
`;

export const SubSection = styled.div`
	padding: 0.6em 0.5em;
	border-bottom: ${(props) => (props.noBorder ? 'none' : '1px solid #343536')};
	display: flex;
	align-items: center;
`;
