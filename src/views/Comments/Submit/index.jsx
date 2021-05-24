import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addComment } from '../../../reducers/commentReducer.js';
import { toggleModal } from '../../../reducers/modalReducer.js';
import { setNotification } from '../../../reducers/notificationReducer.js';
import {
	StyledLink,
	SubmitAction,
	SubmitArea,
	SubmitButton,
	SubmitContainer,
	SubmitHeader,
	SubmitMain,
} from './styles';

const Submit = ({ isLogged, username, cID = null, handleClose }) => {
	const dispatch = useDispatch();
	const { pID } = useParams();

	const [content, setContent] = useState('');

	const handleClick = () => {
		dispatch(toggleModal('Login'));
	};

	const handleSubmit = async () => {
		if (!isLogged) return dispatch(toggleModal('Login'));

		const notification = {};

		try {
			await dispatch(addComment(pID, cID, content));

			notification.type = 'success';
			notification.message = 'Successfully Posted Comment!';
		} catch (e) {
			notification.type = 'error';
			notification.message = 'Something Went Wrong!';
		}

		dispatch(setNotification(notification));

		if (notification.type === 'success') {
			setContent('');

			if (handleClose) handleClose();
		}
	};

	return (
		<SubmitContainer>
			{cID === null ? (
				<SubmitHeader>
					{isLogged ? (
						<span>
							Comment as <Link to={`/u/${username}`}>u/{username}</Link>
						</span>
					) : (
						<span>
							<StyledLink onClick={handleClick}>Login</StyledLink> to
							Comment
						</span>
					)}
				</SubmitHeader>
			) : null}

			<SubmitMain>
				<SubmitArea
					placeholder="What are your thoughts?"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					maxLength="3000"
				/>

				<SubmitAction>
					<SubmitButton onClick={handleSubmit}>Comment</SubmitButton>
				</SubmitAction>
			</SubmitMain>
		</SubmitContainer>
	);
};

export default Submit;
