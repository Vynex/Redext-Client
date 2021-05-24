import styled from 'styled-components';
import { Link } from 'react-router-dom';
import popularBanner from '../../../../assets/Banners/Popular.png';

export const PopularHeader = styled.div`
	height: 5rem;
	padding: 1rem;

	color: white;
	text-shadow: 1px 1.5px #1a1a1b;
	font-size: 1.2rem;
	font-weight: 600;

	background-image: url('${popularBanner}');
	background-position: 50% 35%;
	background-size: cover;
	background-repeat: no-repeat;

	border-radius: 5px 5px 0 0;

	display: flex;
	align-items: end;
`;

export const PopularMain = styled.div`
	flex: 1;
`;

export const SubSection = styled.div`
	padding: 0.6em 0.8em;
	height: 4rem;

	border-bottom: ${(props) => (props.noBorder ? 'none' : '1px solid #343536')};

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SubDetails = styled.div``;

export const SubTitle = styled(Link)`
	font-weight: 500;
`;

export const SubMembers = styled.div`
	margin: 0 0.1em;
	color: #818384;
`;

export const SubButton = styled.button`
	height: 2em;
	width: 7em;

	color: ${({ filled }) => (filled ? '#030303' : '#d7dadc')};
	background-color: ${({ filled }) => (filled ? '#d7dadc' : '#1a1a1b')};

	font-size: 1.1em;
	font-weight: 600;
	border: 1px solid #d7dadc;
	border-radius: 100px;
	
	cursor: pointer;
	transition: all 300ms ease;

	&:hover {
		background-color: ${({ filled }) => (filled ? '#c8cbcd' : '#222223')};
	}
`;

export const PopularEnd = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const PopularSwitch = styled.span`
	color: ${({ disabled }) => (disabled ? '#6f7071' : 'inherit')};
	font-size: 1.2em;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	display: flex;
	align-items: center;
`;
