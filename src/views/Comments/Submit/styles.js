import styled from 'styled-components';

export const SubmitContainer = styled.div`
	margin: 1.5rem 0.8rem;
	width: 90%;

	display: flex;
	flex-direction: column;
`;

export const SubmitHeader = styled.div`
	margin-bottom: 0.4rem;
	width: 100%;
	background-color: #1a1a1b;
`;

export const StyledLink = styled.a`
	cursor: pointer;
`;

export const SubmitMain = styled.div`
	background-color: #272729;
	border-radius: 5px;
`;

export const SubmitArea = styled.textarea`
	padding: 1em;
	height: 10rem;
	width: 100%;

	font-family: inherit;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.05rem;
	background-color: #1a1a1b;
	color: inherit;

	border: 1px solid #343536;
	border-radius: 5px;

	&::placeholder {
		color: #78797a;
	}

	&:focus {
		outline: none;
	}
`;

export const SubmitAction = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const SubmitButton = styled.button`
	margin: 0.5rem;
	padding: 0.5em 1em;

	font-weight: 600;
	color: #6c6c6d;
	background-color: #d7dadc;

	border: 1px solid #d7dadc;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		background-color: #d1d1d1;
	}
`;
