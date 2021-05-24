import styled from 'styled-components';

export const CommentContainer = styled.article`
	margin-bottom: 0.3rem;
	min-height: 8rem;
	width: 90%;

	background-color: #1a1a1b;

	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const CommentHeader = styled.div`
	padding: 1rem 0;

	border: 1px solid #343536;
	border-bottom-color: #151516;

	color: #818384;

	display: flex;

	&:hover {
		border: 1px solid #d7dadc;
	}
`;

export const CommentIcon = styled.div`
	padding: 0 1rem;

	display: flex;
	align-items: center;
`;

export const CommentMeta = styled.div`
	flex: 1;
`;

export const CommentLink = styled.span`
	margin: 0 0.2rem;

	color: ${({ primary }) => (primary ? '#d7dadc' : 'inherit')};

	cursor: pointer;
	display: inline;

	&:hover {
		text-decoration: underline;
	}
`;

export const CommentContent = styled.div`
	border: 1px solid #343536;
	border-top-color: #151516;

	flex: 1;
	display: flex;

	&:hover {
		border: 1px solid #d7dadc;
	}
`;

export const ContentSide = styled.div`
	margin: 0.8rem 0 0.8rem 1.3rem;
	border-left: 2px dashed #343536;
`;

export const ContentMain = styled.div`
	padding: 0.7rem 1rem;
`;

export const ContentHeader = styled.div`
	font-size: 0.9rem;
	color: #818384;
`;

export const ContentBody = styled.div`
	padding: 0.4rem 0;

	font-size: 1.1rem;
	color: #d7dadc;
`;
