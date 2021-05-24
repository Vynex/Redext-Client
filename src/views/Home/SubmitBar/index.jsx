import React from 'react';
import { Link } from 'react-router-dom';
import {
	ButtonContainer,
	CreateButton,
	CreateInput,
	InputContainer,
	SubmitContainer,
} from './styles';

const SubmitBar = ({ isLogged }) => {
	if (!isLogged) return null;

	return (
		<SubmitContainer>
			<InputContainer>
				<Link to="/submit">
					<CreateInput type="text" placeholder="Create Post" />
				</Link>
			</InputContainer>
			<ButtonContainer>
				<Link to="/submit">
					<CreateButton>Post</CreateButton>
				</Link>
			</ButtonContainer>
		</SubmitContainer>
	);
};

export default SubmitBar;
