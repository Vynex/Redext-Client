import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleModal } from '../../../reducers/modalReducer';

import {
	WidgetHeader,
	WidgetEnd,
	WidgetContent,
	WidgetButton,
} from './styles.js';

const Home = ({ isLogged }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = (location) => {
		if (!isLogged) return dispatch(toggleModal('Login'));

		history.push(location);
	};

	return (
		<>
			<WidgetHeader>Home</WidgetHeader>

			<WidgetContent>
				Your personal Redext frontpage. Come here to check in with your
				favorite communities.
			</WidgetContent>

			<WidgetEnd>
				<WidgetButton onClick={() => handleClick('/submit')} filled>
					Create Post
				</WidgetButton>

				<WidgetButton onClick={() => handleClick('/subredext/submit')}>
					Create Community
				</WidgetButton>
			</WidgetEnd>
		</>
	);
};

export default Home;
