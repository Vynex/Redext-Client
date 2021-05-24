import styled from 'styled-components';
import submitBanner from '../../assets/Banners/Submit.png';

export const SideBanner = styled.div`
	width: 10rem;

	background-image: url('${submitBanner}');
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const SubmitMain = styled.div`
	padding: 0 1rem;
	flex: 1;
`;

export const SubmitHeader = styled.div`
	margin: 1em 0;
	padding: 0.4em 0.3em;
	width: 80%;

	font-size: 1.4em;
	font-weight: 600;
	border-bottom: 1px solid #343536;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const SubmitForm = styled.form`
	padding: 0 1rem;
	width: 60%;

	@media (max-width: 768px) {
		width: 80%;
	}
`;

export const SubmitLabel = styled.div`
	margin-top: 2rem;
	font-size: 1.3rem;
`;

export const SubmitSubtext = styled.div`
	margin: 0.4rem 0;
	font-size: 0.9rem;
	color: #818384;
`;

export const SubmitInput = styled.input`
	margin: 0.6rem 0;
	padding: 1em;
	height: 3rem;
	width: 100%;

	color: inherit;
	font-weight: 600;
	background-color: #030303;

	border: 1px solid #343536;
	border-radius: 5px;
`;

export const SubmitTextArea = styled.textarea`
	margin: 0.6rem 0;
	padding: 1em;
	height: 10rem;
	width: 100%;

	color: inherit;
	font-family: inherit;
	font-weight: 500;
	background-color: #030303;

	border: 1px solid #343536;
	border-radius: 5px;
`;

export const SubmitButtonContainer = styled.div`
	margin: 1.5rem 0;

	display: flex;
	justify-content: flex-end;
`;

export const SubmitButton = styled.button`
	padding: 0.5rem 0.5rem;
	width: 15rem;

	font-weight: 600;
	background-color: #d7dadc;

	border: 1px solid #d7dadc;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		background-color: #c8cbcd;
	}
`;

export const SubmitError = styled.div`
	margin-top: 0.3em;

	font-size: 0.9rem;
	color: #e84545;
`;
