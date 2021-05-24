import styled from 'styled-components';

export const Main = styled.main`
	margin-top: ${({ noMargin }) => (noMargin ? '0' : '3.6rem')};
	padding: ${({ noPadding }) => (noPadding ? '0' : '1.5rem 0')};
	min-height: calc(100vh - 3.6rem);

	display: flex;
	justify-content: space-evenly;
`;

export const Content = styled.div`
	flex: 5;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Sidebar = styled.div`
	flex: 2;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Widget = styled.div`
	margin-bottom: 2rem;
	width: 90%;

	background-color: #1a1a1b;
	border: 1px solid #474748;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SidebarSticky = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: sticky;
	top: 5rem;
`;
