import styled from 'styled-components';

export const PostContainer = styled.article`
	margin-bottom: 1.5em;
	padding: 0.5rem;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

export const PostTop = styled.div`
	display: flex;
`;

export const VoteContainer = styled.div`
	width: 2em;

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

export const PostHeader = styled.div`
	margin-left: 1rem;
	flex: 1;
`;

export const PostMain = styled.div`
	flex: 1;
	padding: 0.4rem 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 768px) {
		padding: 0.8rem 0.1rem;
	}
`;

export const PostMeta = styled.span`
	padding-right: 0.4rem;

	font-size: 0.8rem;
	font-style: ${({ edited }) => (edited ? 'italic' : 'normal')};
	color: ${({ filled }) => (filled ? 'inherit' : '#6c6e6f')};
`;

export const PostMetaContainer = styled.div`
	color: #d7dadc;
`;

export const PostTitle = styled.div`
	font-weight: 600;
	font-size: 1.5em;
	padding: 0.3em 0 0.4em 0;
`;

export const PostContent = styled.div`
	margin-bottom: 0.3rem;
	padding: 1rem 1.5rem;

	border-radius: 5px;
	background-color: #202021;
	font-size: 1.1rem;
	line-height: 1.5rem;

	flex: 1;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const PostActionsContainer = styled.div`
	color: #818384;
	font-size: 1em;
	font-weight: 600;

	display: flex;
	justify-content: space-between;
`;

export const ActionStart = styled.div`
	display: flex;
	align-items: center;
`;

export const ActionEnd = styled.div`
	font-size: 0.9rem;
`;

export const PostAction = styled.div`
	margin-right: 0.5rem;
	padding: 0.2rem;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #2d2d2e;
	}
`;

export const ActionText = styled.span`
	padding-left: 0.2em;
`;

export const ContentEdit = styled.textarea`
	padding: 1rem;
	width: 100%;

	font-family: inherit;
	color: inherit;
	background-color: #1a1a1b;
	border: 1px solid #343536;
	border-radius: 4px;

	&:focus {
		outline: none;
	}
`;

export const ContentEnd = styled.div`
	margin: 1rem 0;
	width: 100%;

	display: flex;
	justify-content: flex-end;
`;

export const ContentButton = styled.span`
	margin-left: 0.6em;
	height: 2rem;
	width: 5rem;

	font-weight: 600;
	color: #6c6c6d;
	background-color: ${({ primary }) => (primary ? '#d7dadc' : '#1a1a1b')};

	border-radius: 1em;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: ${({ primary }) => (primary ? '#D1D1D1' : '#222223')};
	}
`;
