import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubmitContainer = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const SubmitHeader = styled.div`
	margin: 2rem 0;
	padding: 0.4rem;
	width: 100%;

	font-size: 1.4rem;
	font-weight: 600;

	border-bottom: 1px solid #343536;
`;

export const SubmitSub = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const SubmitSelector = styled.div`
	height: 2.1rem;
	width: 15rem;
	padding: 0 1rem;

	background-color: #1a1a1b;
	border: 1px solid #343536;

	border-radius: ${({ active }) => (active ? '5px 5px 0 0' : '5px')};
	border-bottom-color: ${({ active }) => (active ? 'transparent' : '#343536')};

	font-size: 1.1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: relative;
	z-index: 2;
	cursor: pointer;
`;

export const SubmitSelect = styled.div`
	width: 15rem;

	border: 1px solid #343536;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	display: ${({ visible }) => (visible ? 'block' : 'none')};

	position: absolute;
	top: 1.9rem;
	left: 0;
`;

export const SubmitOption = styled(Link)`
	height: 2rem;
	padding: 1.2rem;

	color: inherit;
	background-color: #1a1a1b;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: #272729;
		text-decoration: none;
	}
`;

export const FormContainer = styled.div`
	margin: 1rem 0;
	padding-top: 0;
	width: 100%;

	background-color: #1a1a1b;
	border: 1px solid #343536;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
`;

export const SubmitType = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SubmitTab = styled.div`
	height: 3.5rem;
	width: 100%;

	color: ${({ active }) => (active ? '#d7dadc' : '#818384')};
	font-size: 1.2rem;
	font-weight: 600;

	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #343536;
	border-top: none;
	border-bottom-color: ${({ active }) => (active ? '#d7dadc' : '#343536')};

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const SubmitMain = styled.div`
	padding: 1.5rem;
	padding-top: 0.4em;
`;

export const SubmitTitle = styled.input`
	margin-top: 1.5em;
	padding: 1em;
	height: 2.5rem;
	width: 100%;

	font-size: 0.9rem;
	font-weight: 500;
	letter-spacing: 0.05rem;
	background-color: #1a1a1b;
	color: inherit;

	border: 1px solid #343536;
	border-radius: 5px;

	flex: 1;

	&::placeholder {
		font-size: inherit;
		color: #78797a;
	}
`;

export const SubmitContent = styled.textarea`
	margin-top: 1.5rem;
	padding: 1rem;
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
`;

export const SubmitButtons = styled.div`
	margin-top: 1rem;
	padding: 0.5em;

	display: flex;
	flex-direction: row-reverse;
`;

export const SubmitButton = styled.button`
	padding: 0.5rem 1.2rem;

	font-weight: 600;
	color: #6c6c6d;
	background-color: #d7dadc;

	border: 1px solid #d7dadc;
	border-radius: 1em;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

	&:hover {
		background-color: #d1d1d1;
	}
`;

export const SubmitError = styled.div`
	margin-top: 0.3em;

	font-size: 0.9rem;
	color: #e84545;
`;