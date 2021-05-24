import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { extendFeed } from '../../reducers/feedReducer';

import Post from './Post.jsx';
import Placeholder from './Placeholder.jsx';

const Style = { width: '100%', display: 'flex', justifyContent: 'center' };

const Feed = ({ isLogged, scope, sort }) => {
	const dispatch = useDispatch();

	const feed = useSelector(({ feed }) => feed);
	const voted = useSelector(({ votedPosts }) => votedPosts);

	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setPage(1);
	}, [scope, sort]);

	useEffect(() => {
		if (feed.data.length >= feed.count) setHasMore(false);
		else setHasMore(true);
	}, [feed]);

	const observer = useRef();

	const loader = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					dispatch(extendFeed(scope, sort, page));
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[dispatch, scope, sort, page]
	);

	if (!feed.data.length) return null;

	return (
		<>
			{feed.data.map((post) => (
				<Post
					key={post}
					post={post}
					vote={
						voted.upvoted.includes(post)
							? 1
							: voted.downvoted.includes(post)
							? -1
							: 0
					}
					isLogged={isLogged}
				/>
			))}

			{hasMore && (
				<div style={Style} ref={loader}>
					<Placeholder />
				</div>
			)}
		</>
	);
};

export default Feed;
