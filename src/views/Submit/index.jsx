import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import SubmitForm from './SubmitForm';
import About from './Sidebar/About.jsx';
import Rules from './Sidebar/Rules.jsx';
import {
	clearSubredext,
	setSubredext,
} from '../../reducers/subredextReducer.js';

import { Main, Content, Sidebar } from '../styles.js';

const Submit = () => {
	const dispatch = useDispatch();
	const subredext = useSelector(({ subredext }) => subredext);
	const { link } = useParams();

	useEffect(() => {
		document.title = link ? `Submit to r/${link}` : 'Submit to Redext';
	}, [link]);

	useEffect(() => {
		if (link) dispatch(setSubredext(link));
		else dispatch(clearSubredext());
	}, [dispatch, link]);

	return (
		<Main>
			<Content>
				<SubmitForm link={subredext} />
			</Content>

			<Sidebar>
				<About sub={subredext} />

				<Rules />
			</Sidebar>
		</Main>
	);
};

export default Submit;
