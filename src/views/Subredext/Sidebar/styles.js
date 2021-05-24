import styled from 'styled-components';

export const InfoBox = styled.div`
	width: 90%;
	margin: 1rem 0;
	padding: 1rem;

	font-size: 1.1rem;
	background-color: #1a1a1b;

	border: 1px solid #343536;
	border-radius: 5px;

	${({ sticky }) => sticky && 'position: sticky;'}
	${({ sticky }) => sticky && 'top: 5rem;'}
`;

export const InfoTitle = styled.div`
	color: #818384;
`;

export const InfoSection = styled.div`
	padding: 1rem 0;
`;

export const InfoContent = styled.div`
	padding: 0.4rem 0;
	height: 100%;

	display: flex;
`;

export const DescriptionBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const DescriptionText = styled.div`
	display: ${({ hidden }) => (hidden ? 'none' : '')};

	transition: all 100ms linear 0s;
	cursor: pointer;

	&:hover {
		padding: 0.4rem;

		border: 1px solid #d7dadc;
		border-radius: 4px;
	}
`;

export const DescriptionEdit = styled.textarea`
	padding: 0.5rem;
	width: 100%;

	font-family: inherit;
	color: inherit;
	background-color: #272729;
	border: 1px solid #d7dadc;
	border-radius: 4px;

	&:focus {
		outline: none;
	}
`;

export const DescriptionEnd = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const DescriptionAction = styled.a`
	margin: 0 0.4rem;
	color: ${({ red }) => (red ? '#fb3640' : 'inherit')};
	cursor: pointer;
`;

export const InfoEnd = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`;

export const InfoButton = styled.div`
	margin: 0.5rem 0;
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

	transition: all 300ms ease;

	&:hover {
		background-color: ${({ filled }) => (filled ? '#c8cbcd' : '#222223')};
	}
`;
