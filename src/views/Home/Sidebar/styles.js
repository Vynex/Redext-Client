import styled from 'styled-components';
import authorBanner from '../../../assets/Banners/Author.png';
import homeBanner from '../../../assets/Banners/Home.png';

export const WidgetHeader = styled.div`
	height: 4rem;
	padding: 1rem;

	color: white;
	text-shadow: 1px 1.5px #1a1a1b;
	font-size: 1.2rem;
	font-weight: 600;

	background-image: url('${homeBanner}');
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;

	border-radius: 5px 5px 0 0;

	display: flex;
	align-items: end;
`;

export const WidgetContent = styled.div`
	padding: 1rem;
	font-size: 1.1rem;
`;

export const WidgetEnd = styled.div`
	padding: 1rem;
`;

export const WidgetButton = styled.div`
	margin: 1rem 0;
	height: 2rem;
	width: 100%;

	font-size: 1.2rem;
	font-weight: 600;

	color: ${({ filled }) => (filled ? '#030303' : '#d7dadc')};
	background-color: ${({ filled }) => (filled ? '#d7dadc' : '#1a1a1b')};

	border: 1px solid #d7dadc;
	border-radius: 100px;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${({ filled }) => (filled ? '#c8cbcd' : '#222223')};
	}
`;

export const PostButton = styled.a``;

export const SubButton = styled.a`
	&:hover {
		background-color: #222223;
		text-decoration: none;
	}
`;

export const AuthorHeader = styled.div`
	height: 4rem;
	padding: 1rem;

	color: white;
	text-shadow: 1px 1.5px #1a1a1b;
	font-size: 1.2rem;
	font-weight: 600;

	background-image: url('${authorBanner}');
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;

	border-radius: 5px;

	display: flex;
	align-items: end;
`;

export const AuthorLink = styled.a`
	color: inherit;
	&:hover {
		text-decoration: none;
	}
`;
