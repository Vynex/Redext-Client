import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
   from {
      bottom: 0;
      opacity: 0;
   }

   to {
      bottom: 2rem;
      opacity: 1;
   }
`;

const fadeout = keyframes`
   from {
      bottom: 2rem;
      opacity: 1;
   }

   to {
      bottom: 0;
      opacity: 0;
   }
`;

export const NotificationContainer = styled.div`
	margin: auto;
	height: 3rem;
	width: 30rem;

	position: fixed;
	left: 50%;
	bottom: 2rem;
	transform: translateX(-50%);

	display: flex;
	z-index: 5;

	animation: ${fadein} 300ms, ${fadeout} 500ms 4.5s;
`;

export const NotificationSide = styled.div`
	width: 3%;

	background-color: ${({ success }) => (success ? '#24a0ed' : '#fb3640')};
	border: 1px solid ${({ success }) => (success ? '#24a0ed' : '#fb3640')};
	border-radius: 5px 0 0 5px;
	transition: width 100ms ease;

	&:hover {
		width: 5%;
	}
`;

export const NotificationMain = styled.div`
	flex: 1;

	background-color: #1a1a1b;
	border: 1px solid #343536;
	border-left: none;
	border-radius: 0 5px 5px 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const NotificationIcon = styled.img`
	margin: 0 1rem;
	height: 70%;
`;

export const NotificationMessage = styled.div`
	flex: 1;
`;
