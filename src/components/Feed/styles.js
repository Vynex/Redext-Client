import styled, { keyframes } from 'styled-components';

export const PostContainer = styled.article`
	min-height: 10em;
	width: 80%;
	margin-bottom: 1.5em;

	border-radius: 5px;
	border: 1px solid #343536;
	background-color: #1a1a1b;

	display: flex;

	&:hover {
		border: 1px solid #d7dadc;
	}

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const PostSide = styled.div`
	width: 2em;
	background-color: #151516;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 5px 0 0 5px;
`;

export const VoteButton = styled.div`
	color: #d7dadc;
	font-size: 1.5em;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`;

export const PostMain = styled.div`
	flex: 1;
	padding: 0.4em 1em;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const PostMeta = styled.span`
	padding-right: 0.4rem;

	font-size: 0.8rem;
	font-style: ${({ edited }) => (edited ? 'italic' : 'normal')};
	color: ${({ filled }) => (filled ? 'inherit' : '#6c6e6f')};
`;

export const PostMetaContainer = styled.div``;

export const PostHeader = styled.div`
	font-weight: 600;
	font-size: 1.5em;
	padding: 0.3em 0 0.4em 0;
`;

export const PostContent = styled.div`
	flex: 1;
	margin-left: 0.2em;
	padding-bottom: 1.5em;
`;

export const PostActionsContainer = styled.div`
	color: #6c6e6f;
	font-size: 1em;
	font-weight: 600;
	display: flex;
	align-items: center;
`;

export const PostAction = styled.div`
	margin-right: 0.5em;
	padding: 0.1em 0.2em 0 0.2em;
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: #2d2d2e;
	}
`;

export const ActionIcon = styled.span``;

export const ActionText = styled.span`
	padding-left: 0.2em;
`;

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Loading = styled.div`
	height: ${({ header }) => (header ? '1.5rem' : '7rem')};
	width: ${({ header }) => (header ? '50%' : '100%')};
	position: relative;
	background-color: #28282a;
	overflow: hidden;
	&::after {
		content: '';
		display: block;
		background-color: #303032;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: ${({ header }) => (header ? '1.5rem' : '7rem')};
		transform: translateX(0);
		animation: 1.5s ${loading} ease-in-out infinite;
	}
`;
