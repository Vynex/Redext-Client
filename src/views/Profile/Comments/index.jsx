import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Placeholder from '../Placeholder';
import Comment from './Comment.jsx';
import {
	extendProfileComments,
	setProfileComments,
} from '../../../reducers/profileReducer';

const Style = { width: '100%', display: 'flex', justifyContent: 'center' };

const Comments = ({ username }) => {
	const dispatch = useDispatch();
	const observer = useRef();

	const comments = useSelector(({ profile }) => profile.comments);

	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setPage(1);
	}, []);

	useEffect(() => {
		dispatch(setProfileComments(username));
	}, [dispatch, username]);

	useEffect(() => {
		if (comments.data.length >= comments.count) setHasMore(false);
		else setHasMore(true);
	}, [comments]);

	const loader = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					dispatch(extendProfileComments(username, page));
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[dispatch, username, page]
	);

	return (
		<>
			{comments.data.map((comment) => (
				<Comment key={comment} cID={comment} />
			))}

			{hasMore && (
				<div style={Style} ref={loader}>
					<Placeholder />
				</div>
			)}
		</>
	);
};

export default Comments;
