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

export const ModalOverlay = styled.div`
	background-color: black;
	opacity: 40%;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 4;
`;

export const ModalContainer = styled.div`
	height: 12rem;
	width: 30rem;
	max-height: 100%;
	max-width: 100%;

	border: 1px solid #343536;
	border-radius: 5px;

	display: ${({ visible }) => (visible ? 'flex' : 'none')};
	flex-direction: column;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	z-index: 5;
`;

export const ModalTitle = styled.div`
	padding: 1rem;

	background-color: #1a1a1b;
	border-radius: 5px 5px 0 0;
	border-bottom: 1px solid #343536;

	display: flex;
	justify-content: space-between;
`;

export const ModalContent = styled.div`
	padding: 1rem;
	background-color: #1a1a1b;
	flex: 1;
`;

export const ModalAction = styled.div`
	padding: 1rem;

	border-radius: 0 0 5px 5px;
	background-color: #343536;

	display: flex;
	flex-direction: row-reverse;
`;

export const ModalButton = styled.span`
	margin: 0 0.3rem;
	height: 2rem;
	width: 4rem;

	font-weight: 600;
	color: ${({ primary }) => (primary ? '#1a1a1b' : '#d7dadc')};
	background-color: ${({ primary }) => (primary ? '#d7dadc' : '#343536')};

	border: 1px solid #d7dadc;
	border-radius: 9999px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: ${({ primary }) => (primary ? '#c8cbcd' : '#3b3c3d')};
	}
`;
