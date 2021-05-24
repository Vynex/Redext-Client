import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Post from './Post';
import Submit from './Submit';
import Replies from './Replies';
import About from '../Subredext/Sidebar/About.jsx';
import Rules from '../Submit/Sidebar/Rules.jsx';

import {
	clearSubredext,
	setSubredext,
} from '../../reducers/subredextReducer.js';
import {
	clearComments,
	setComments,
	setVotedComments,
} from '../../reducers/commentReducer.js';

import { Main, Content, Sidebar } from '../styles.js';
import { Card } from './styles.js';
import { clearPost, setPost } from '../../reducers/postReducer';

const Comments = () => {
	const dispatch = useDispatch();
	const { link, pID } = useParams();

	const user = useSelector(({ user }) => user);
	const post = useSelector(({ post }) => post);
	const votedPosts = useSelector(({ votedPosts }) => votedPosts);
	const subredext = useSelector(({ subredext }) => subredext);

	const [vote, setVote] = useState(null);

	useEffect(() => {
		document.title = post
			? `${post.title}: r/${post.subredext.title}`
			: 'redext: the front page of the internet';
	}, [post]);

	useEffect(() => {
		dispatch(setPost(pID));
		dispatch(setComments(pID));
		dispatch(setSubredext(link));

		return () => {
			dispatch(clearPost());
			dispatch(clearComments());
			dispatch(clearSubredext());
		};
	}, [dispatch, link, pID]);

	useEffect(() => {
		dispatch(setPost(pID));

		setVote(0);
		if (votedPosts.upvoted.includes(pID)) setVote(1);
		if (votedPosts.downvoted.includes(pID)) setVote(-1);
	}, [dispatch, pID, votedPosts]);

	useEffect(() => {
		if (user) dispatch(setVotedComments(pID));
	}, [dispatch, user, pID]);

	if (!post) return <div />;

	return (
		<Main>
			<Content>
				<Card>
					<Post isLogged={user !== null} post={post} vote={vote} />

					<Submit isLogged={user !== null} username={user?.displayName} />

					<Replies isLogged={user !== null} pID={pID} />
				</Card>
			</Content>

			<Sidebar>
				<About subredext={subredext} />

				<Rules />
			</Sidebar>
		</Main>
	);
};

export default Comments;
