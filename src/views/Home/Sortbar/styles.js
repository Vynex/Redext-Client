import styled from 'styled-components';

export const SelectorContainer = styled.div`
	margin-bottom: 1rem;
	padding: 0 0.3rem;

	width: 80%;
	height: 3.6rem;

	background-color: #1a1a1b;
	border-radius: 5px;
	border: 1px solid #343536;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const SortContainer = styled.div`
	display: flex;
`;

export const SortButton = styled.span`
	font-size: 1.2rem;
	margin: 0 0.25rem;
	height: 2rem;
	width: 4.3rem;

	background-color: ${({ active }) => (active ? '#272729' : '')};
	border-radius: 1rem;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #353538;
	}
`;

export const SortIcon = styled.img`
	height: 1rem;
	margin: 0.2em;
`;
