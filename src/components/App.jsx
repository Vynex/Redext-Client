import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Home,
	Subredext,
	Comments,
	Profile,
	Submit,
	SubmitSub,
} from '../views';
import Navbar from './Navbar';
import Notification from './Notification';

import { initUser } from '../reducers/userReducer.js';
import { clearVotedPost, initVotedPost } from '../reducers/votedPostReducer';
import { clearSubscribed, initSubscribed } from '../reducers/subscribedReducer';
import { clearVotedComments } from '../reducers/commentReducer';

import { GlobalStyle } from './styles.js';

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => user);

	useEffect(() => {
		dispatch(initUser());
	}, [dispatch]);

	useEffect(() => {
		if (user !== null) {
			dispatch(initVotedPost());
			dispatch(initSubscribed());
		} else {
			dispatch(clearVotedPost());
			dispatch(clearVotedComments());
			dispatch(clearSubscribed());
		}
	}, [dispatch, user]);

	return (
		<>
			<GlobalStyle />
			<header>
				<Navbar isLogged={user !== null} />
			</header>

			<Switch>
				<Route exact path="/" children={<Home />} />

				<Route exact path="/r/:link" children={<Subredext />} />

				<Route path="/r/:link/submit" children={<Submit />} />

				<Route path="/r/:link/comments/:pID" children={<Comments />} />

				<Route path="/u/:username" children={<Profile />} />

				<Route path="/submit" children={<Submit />} />

				<Route path="/subredext/submit" children={<SubmitSub />} />
			</Switch>

			<Notification />
		</>
	);
};

export default App;
