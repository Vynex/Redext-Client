import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Placeholder from '../Placeholder';
import Post from './Post.jsx';
import {
	extendProfilePosts,
	setProfilePosts,
} from '../../../reducers/profileReducer';

const Style = { width: '100%', display: 'flex', justifyContent: 'center' };

const Posts = ({ username, isLogged }) => {
	const dispatch = useDispatch();
	const observer = useRef();

	const posts = useSelector(({ profile }) => profile.posts);
	const voted = useSelector(({ votedPosts }) => votedPosts);

	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setPage(1);
	}, []);

	useEffect(() => {
		dispatch(setProfilePosts(username));
	}, [dispatch, username]);

	useEffect(() => {
		if (posts.data.length >= posts.count) setHasMore(false);
		else setHasMore(true);
	}, [posts]);

	const loader = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					dispatch(extendProfilePosts(username, page));
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[dispatch, username, page]
	);

	return (
		<>
			{posts.data.map((post, index) => {
				return (
					<Post
						key={post}
						pID={post}
						vote={
							voted.upvoted.includes(post)
								? 1
								: voted.downvoted.includes(post)
								? -1
								: 0
						}
						top={index === 0}
						bottom={index === posts.data.length - 1}
						isLogged={isLogged}
					/>
				);
			})}

			{hasMore && (
				<div style={Style} ref={loader}>
					<Placeholder />
				</div>
			)}
		</>
	);
};

export default Posts;
