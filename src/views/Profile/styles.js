import styled from 'styled-components';

export const ProfileHeader = styled.div`
	margin-top: 3.6rem;
	padding: 0 10rem;
	height: 3rem;
	width: 100%;

	font-size: 1.1em;
	font-weight: 600;
	text-transform: uppercase;

	background-color: #1a1a1b;
	border-bottom: 1px solid #343536;

	display: flex;
`;

export const HeaderTab = styled.div`
	margin: 0 0.5rem;
	padding: 0.4rem;
	height: 100%;

	box-shadow: ${({ active }) => (active ? 'inset 0 -2px 0 0 #d7dadc' : '')};

	display: flex;
	align-items: center;

	cursor: pointer;
`;
