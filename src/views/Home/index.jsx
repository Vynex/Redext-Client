import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearFeed, initFeed } from '../../reducers/feedReducer.js';
import SubmitBar from './SubmitBar';
import SortBar from './Sortbar';
import Feed from '../../components/Feed';

import Create from './Sidebar/Create';
import Popular from './Sidebar/Popular';
import Author from './Sidebar/Author';

import { Main, Content, Sidebar, SidebarSticky, Widget } from '../styles.js';

const Home = () => {
	const dispatch = useDispatch();

	const user = useSelector(({ user }) => user);
	const isLogged = user !== null;

	const [scope, setScope] = useState('all');
	const [sort, setSort] = useState('hot');

	useEffect(() => {
		document.title = 'redext: the front page of the internet';
	}, []);

	useEffect(() => {
		if (isLogged) setScope('user');
	}, [dispatch, isLogged]);

	useEffect(() => {
		dispatch(initFeed(scope, sort));
		return dispatch(clearFeed());
	}, [dispatch, scope, sort]);

	return (
		<Main>
			<Content>
				<SubmitBar isLogged={isLogged} />

				<SortBar
					isLogged={isLogged}
					sort={sort}
					scope={scope}
					handleScope={(scope) => setScope(scope)}
					handleSort={(sort) => setSort(sort)}
				/>

				<Feed isLogged={isLogged} scope={scope} sort={sort} />
			</Content>

			<Sidebar>
				<Widget>
					<Popular isLogged={isLogged} />
				</Widget>

				<SidebarSticky>
					<Widget>
						<Create isLogged={isLogged} />
					</Widget>

					<Widget>
						<Author />
					</Widget>
				</SidebarSticky>
			</Sidebar>
		</Main>
	);
};

export default Home;
