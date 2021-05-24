import styled from 'styled-components';

export const SortbarContainer = styled.div`
	margin: 0 2rem;
	padding: 0.5rem 0.4rem;
	width: 90%;

	color: #818384;
	border-bottom: 1px solid #343536;
`;

export const SortButton = styled.a`
	margin-left: 0.4rem;
	color: #4fbcff;
	cursor: pointer;
	text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;

export const CommentsContainer = styled.div`
	margin: 1.5rem 2rem;
	padding: 0.5rem 0.4rem;
	width: 90%;
`;

export const CommentContainer = styled.div`
	margin-top: 1.2rem;
	margin-left: ${({ top }) => (top ? '0' : '0.8')}rem;
	margin-bottom: 1.5rem;

	border-left: ${({ border }) => (border ? '2' : '0')}px solid #343536;

	&:hover {
		border-color: #d7dadc;
	}
`;

export const CommentStart = styled.div``;

export const CommentOwner = styled.span`
	margin-left: 0.3rem;
	font-size: 0.9rem;
`;
export const CommentDate = styled.span`
	margin-left: 0.5rem;
	font-size: 0.9rem;
	color: #818384;
`;

export const CommentContent = styled.div`
	padding-top: 0.6rem;
	padding-bottom: 0.3rem;
	font-size: 1.1rem;
`;

export const CommentEnd = styled.div`
	display: flex;
	color: #818384;
`;

export const ScoreContainer = styled.div`
	color: ${({ vote }) =>
		vote === 1 ? '#ff5200' : vote === -1 ? '#7193ff' : 'inherit'};
	display: flex;
`;

export const CommentAction = styled.div`
	margin: 0 0.3rem;
	padding: 0.2rem;

	display: flex;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: #2d2d2e;
	}
`;

export const CommentExpand = styled.a`
	margin-top: 0.5rem;
	color: #4fbcff;
	cursor: pointer;
	display: block;

	&:hover {
		text-decoration: underline;
	}
`;
