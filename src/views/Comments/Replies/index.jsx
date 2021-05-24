import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment.jsx';
import Sortbar from './Sortbar.jsx';
import { CommentsContainer } from './styles.js';

const Replies = ({ isLogged, pID }) => {
	const comments = useSelector(({ comments }) => comments.data);

	return (
		<>
			<Sortbar pID={pID} />

			<CommentsContainer>
				{comments.map((comment) => (
					<Comment
						key={comment._id}
						comment={comment}
						index={0}
						isLogged={isLogged}
					/>
				))}
			</CommentsContainer>
		</>
	);
};

export default Replies;
