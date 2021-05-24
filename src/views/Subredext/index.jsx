import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearSubredext,
	setSubredext,
} from '../../reducers/subredextReducer.js';
import { clearFeed, initFeed } from '../../reducers/feedReducer.js';

import Feed from '../../components/Feed';

import SortBar from './Sortbar';
import About from './Sidebar/About.jsx';

import { SubHeader } from './styles.js';
import { Main, Content, Sidebar } from '../styles.js';

const Subredext = () => {
	const dispatch = useDispatch();

	const user = useSelector(({ user }) => user);
	const subredext = useSelector(({ subredext }) => subredext);

	const { link } = useParams();

	const [sort, setSort] = useState('hot');

	useEffect(() => {
		document.title = subredext
			? `r/${subredext.title}`
			: 'redext: the front page of the internet';
	}, [subredext]);

	useEffect(() => {
		dispatch(setSubredext(link));
		return dispatch(clearSubredext());
	}, [dispatch, link]);

	useEffect(() => {
		dispatch(initFeed(link, sort));
		return dispatch(clearFeed());
	}, [dispatch, link, sort]);

	return (
		<>
			<SubHeader>r/{subredext?.title}</SubHeader>

			<Main noMargin>
				<Content>
					<SortBar
						link={link}
						sort={sort}
						handleSort={(sort) => setSort(sort)}
					/>

					<Feed isLogged={user !== null} scope={link} sort={sort} />
				</Content>

				<Sidebar>
					<About subredext={subredext} sticky />
				</Sidebar>
			</Main>
		</>
	);
};

export default Subredext;
