import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigatorContainer = styled.div`
	width: 20rem;
	height: 2.1rem;
	margin: 0 1rem;
	padding: 0 1rem;

	background-color: #1a1a1b;
	border: 1px solid ${({ active }) => (active ? '#343536' : 'transparent')};
	border-bottom-color: transparent;
	border-radius: ${({ active }) => (active ? '5px 5px 0 0' : '5px')};

	font-size: 1.1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: relative;
	z-index: 3;
	cursor: pointer;

	&:hover {
		border: 1px solid #343536;
		border-bottom-color: ${({ active }) =>
			active ? 'transparent' : '#343536'};
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavigatorSelect = styled.div`
	position: absolute;
	top: 1.9rem;
	left: -1px;
	width: 20rem;

	border: 1px solid #343536;
	border-top-color: transparent;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const NavigatorLabel = styled.div`
	height: 1.8rem;
	width: 100%;
	padding: 1.2rem;

	font-size: 0.8rem;
	font-weight: 500;
	text-transform: uppercase;

	color: #818384;
	background-color: #1a1a1b;

	cursor: initial;
	display: flex;
	align-items: center;
`;

export const NavigatorOption = styled(Link)`
	height: 1.8rem;
	width: 100%;
	padding: 1.3rem;

	color: inherit;
	background-color: #1a1a1b;

	display: flex;
	flex-direction: row;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: #272729;
		text-decoration: none;
	}
`;
