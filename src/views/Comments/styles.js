import styled from 'styled-components';

export const Card = styled.div`
	width: 90%;

	background-color: #1a1a1b;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
		border-radius: 0;
	}
`;
