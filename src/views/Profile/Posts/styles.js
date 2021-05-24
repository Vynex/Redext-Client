import styled from 'styled-components';

export const PostContainer = styled.article`
	min-height: 6rem;
	width: 90%;

	border-top-left-radius: ${({ top }) => (top ? '5px' : '0')};
	border-top-right-radius: ${({ top }) => (top ? '5px' : '0')};

	border-bottom-left-radius: ${({ bottom }) => (bottom ? '5px' : '0')};
	border-bottom-right-radius: ${({ bottom }) => (bottom ? '5px' : '0')};

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
	width: 2rem;
	background-color: #161617;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	border-top-left-radius: ${({ top }) => (top ? '5px' : '0')};
	border-bottom-left-radius: ${({ bottom }) => (bottom ? '5px' : '0')};
`;

export const VoteButton = styled.div`
	color: #d7dadc;
	font-size: 1.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`;

export const PostMain = styled.div`
	padding: 0.5rem 1rem;
   width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const PostHeader = styled.div`
	font-weight: 600;
	font-size: 1.2rem;
`;

export const PostMetaContainer = styled.div`
   padding: 0.3rem;
   flex: 1;
`;

export const PostMeta = styled.span`
	padding-right: 0.5rem;

	font-size: 0.9rem;
	font-style: ${({ edited }) => (edited ? 'italic' : 'normal')};
	color: ${({ primary }) => (primary ? 'inherit' : '#6c6e6f')};
`;

export const PostActionsContainer = styled.div`
	color: #6c6e6f;
	font-size: 1em;
	font-weight: 600;

	display: flex;
	align-items: center;
`;

export const PostAction = styled.div`
	margin-right: 0.5rem;
	padding: 0.2rem;
   padding-bottom: 0;

	display: flex;
   justify-content: space-between;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #2d2d2e;
	}
`;