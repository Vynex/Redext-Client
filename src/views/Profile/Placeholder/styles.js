import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Loading = styled.div`
	height: ${({ header }) => (header ? '2rem' : '1rem')};
	width: ${({ header, meta }) => (header ? '90%' : meta ? '50%' : '35%')};

	background-color: #28282a;

	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		height: ${({ header }) => (header ? '2rem' : '1rem')};
		width: 100%;

		background-color: #303032;

		display: block;
		flex: 1;

		position: absolute;
		top: 0;
		bottom: 0;

		transform: translateX(0);
		animation: 1.5s ${loading} ease-in-out infinite;
	}
`;
