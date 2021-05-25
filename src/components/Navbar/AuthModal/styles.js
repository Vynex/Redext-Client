import styled from 'styled-components';
import authBanner from '../../../assets/Banners/Authentication.png';

export const Modal = styled.div`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	height: 600px;
	width: 60rem;
	max-height: 100%;
	max-width: 100%;
	background-color: #ffffff;
	box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.4);

	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	z-index: 11;
`;

export const ModalOverlay = styled.div`
	background-color: black;
	opacity: 40%;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
`;

export const ModalSide = styled.div`
	height: 100%;
	width: 10rem;

	background-image: url('${authBanner}');
	background-size: cover;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const ModalMain = styled.div`
	padding: 5rem 3rem;
	height: 100%;

	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const ModalTitle = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	color: #1a1a1b;
`;

export const ModalSubtitle = styled.div`
	font-size: 0.9rem;
	color: #1a1a1b;
`;

export const ModalForm = styled.form`
	margin-top: 3.2rem;
`;

export const ModalInput = styled.input`
	margin-top: 1.5em;
	padding: 1em;
	height: 3rem;
	width: 70%;

	font-size: 1em;
	font-weight: 600;
	color: #1a1a1b;

	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	outline: none;

	&:focus {
		border-color: rgba(0, 0, 0, 0.2);
	}

	&::placeholder {
		color: #a5a4a4;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ModalError = styled.div`
	color: #ea0027;
`;

export const ModalSubmit = styled.button`
	margin-top: 2.5em;
	padding: 0.8em;
	width: 70%;

	font-weight: 600;
	color: inherit;
	background-color: #0079d3;
	border-radius: 999px;
	border: none;

	display: flex;
	justify-content: center;
	cursor: pointer;

	&:hover {
		background-color: #1484d7;
	}
`;

export const ModalEnd = styled.div`
	margin-top: 3.5rem;
	color: #1a1a1b;
`;

export const ModalLink = styled.a`
	color: #0079d3;
	cursor: pointer;

	&:hover {
		color: #1484d7;
	}
`;

export const ModalClose = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	color: #818384;
	font-size: 2rem;
	background: none;
	border: none;

	cursor: pointer;
`;
