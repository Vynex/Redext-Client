import styled from 'styled-components';

export const SubmitContainer = styled.div`
	margin: 0 0 1em 0;
	padding: 0em 1em;

	width: 80%;
	height: 3.6rem;

	background-color: #1a1a1b;
	border-radius: 5px;
	border: 1px solid #343536;

	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const InputContainer = styled.div`
	flex: 1;
`;

export const CreateInput = styled.input`
	background-color: #272729;
	padding: 1em;
	font-size: 0.8em;
	color: #78797a;

	height: 2rem;
	width: 98%;
	border: 1px solid #343536;
	border-radius: 5px;
`;

export const ButtonContainer = styled.div`
	padding-left: '1em';
`;

export const CreateButton = styled.button`
	background-color: #272729;
	font-size: 0.9em;
	color: #78797a;

	height: 2rem;
	width: 4rem;
	border: 1px solid #343536;
	border-radius: 5px;
`;
