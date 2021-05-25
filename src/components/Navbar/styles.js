import styled from 'styled-components';

export const Nav = styled.nav`
	padding: 0 2rem;
	height: 3.6rem;
	width: 100%;

	background-color: #1a1a1b;
	border-bottom: 1px solid #343536;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	z-index: 9;

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`;

export const NavStart = styled.div`
	height: 100%;
	width: 9rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.img`
	height: 80%;
`;

export const NavMid = styled.div`
	display: flex;
	justify-content: evenly;
	flex: 1;
`;

export const NavEnd = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

export const NavButton = styled.a`
	margin: 0 0.3em;
	padding: 0.5em 1em;
	font-weight: 600;
	color: ${({ filled }) => (filled ? '#1a1a1b' : '#d7dadc')};
	background-color: ${({ filled }) => (filled ? '#d7dadc' : '#1a1a1b')};
	border: 1px solid #d7dadc;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		text-decoration: none;
		background-color: ${({ filled }) => (filled ? '#c8cbcd' : '#222223')};
	}
`;
