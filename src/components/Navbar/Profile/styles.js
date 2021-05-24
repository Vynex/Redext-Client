import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
	width: 12rem;
	height: 2.8rem;
	padding: 0 0.3rem;

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
`;

export const ProfileLabel = styled.div`
	margin: 0 0.4rem;

	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const ProfileUsername = styled.div`
	color: inherit;
`;

export const ProfileKarma = styled.div`
	color: #a8aaab;
	font-size: 0.9rem;

	display: flex;
	align-items: center;
`;

export const ProfileSelect = styled.div`
	position: absolute;
	top: 2.6rem;
	left: -1px;
	width: 12rem;

	border: 1px solid #343536;
	border-top-color: transparent;
	border-radius: 0 0 5px 5px;

	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const ProfileOption = styled(Link)`
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
