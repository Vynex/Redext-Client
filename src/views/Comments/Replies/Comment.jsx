import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {
	RiMessage3Line,
	RiArrowUpSLine,
	RiArrowDownSLine,
	RiDeleteBin5Line,
} from 'react-icons/ri';

import Submit from '../Submit';

import { toggleModal } from '../../../reducers/modalReducer.js';
import {
	extendComments,
	addDownvoteComment,
	addUpvoteComment,
	removeVoteComment,
} from '../../../reducers/commentReducer';

import { getComment } from '../../../services/comments.js';
import {
	CommentAction,
	CommentContainer,
	CommentContent,
	CommentDate,
	CommentEnd,
	CommentExpand,
	CommentStart,
	ScoreContainer,
} from './styles.js';
import DeleteModal from './DeleteModal';
import { ModalOverlay } from '../styles';

const LinkStyle = { fontSize: 'inherit', color: 'inherit' };

const Comment = ({ isLogged, comment, index }) => {
	const dispatch = useDispatch();

	const user = useSelector(({ user }) => user);
	const votedComments = useSelector(({ comments }) => comments.voted);

	const [vote, setVote] = useState(0);
	const [score, setScore] = useState(comment.score);
	const [showReply, setShowReply] = useState(false);
	const [modalActive, setModalActive] = useState(false);

	useEffect(() => {
		(async () => {
			const updated = await getComment(comment._id);
			setScore(updated.score);
		})();

		setVote(0);
		if (votedComments.upvoted.includes(comment._id)) setVote(1);
		if (votedComments.downvoted.includes(comment._id)) setVote(-1);
	}, [votedComments, comment._id]);

	const handleExpand = (id) => {
		dispatch(extendComments(comment.post, id));
	};

	const handleVote = async (direction) => {
		if (!comment.deleted) {
			if (!isLogged) return dispatch(toggleModal('Login'));

			dispatch(removeVoteComment(comment._id));

			if (direction === 1 && vote !== 1) {
				dispatch(addUpvoteComment(comment._id));
			}
			if (direction === -1 && vote !== -1) {
				dispatch(addDownvoteComment(comment._id));
			}
		}
	};

	if (comment === null) return <div />;

	return (
		<CommentContainer top={index === 0 ? true : false}>
			<CommentStart>
				{comment.deleted ? (
					comment.content
				) : (
					<Link to={`/u/${comment.owner.displayName}`} style={LinkStyle}>
						u/{comment.owner.displayName}
					</Link>
				)}
				<CommentDate>{moment(comment.createdAt).fromNow()}</CommentDate>
			</CommentStart>

			<CommentContent>{comment.content}</CommentContent>

			<CommentEnd>
				<ScoreContainer vote={vote}>
					<CommentAction onClick={() => handleVote(1)}>
						<RiArrowUpSLine />
					</CommentAction>

					{score}

					<CommentAction onClick={() => handleVote(-1)}>
						<RiArrowDownSLine />
					</CommentAction>
				</ScoreContainer>

				{comment.deleted ? null : (
					<CommentAction onClick={(e) => setShowReply(!showReply)}>
						<RiMessage3Line />
						Reply
					</CommentAction>
				)}

				{user?.id === comment.owner?._id && (
					<CommentAction onClick={() => setModalActive(true)}>
						<RiDeleteBin5Line />
						Delete
					</CommentAction>
				)}
			</CommentEnd>

			{typeof comment.children[0] !== 'object' &&
				comment.children.length !== 0 && (
					<CommentExpand
						className="action"
						onClick={() => handleExpand(comment._id)}
					>
						Show more replies
					</CommentExpand>
				)}

			{typeof comment.children[0] === 'object' && (
				<CommentContainer border>
					{comment.children.map((reply) => (
						<Comment
							key={reply._id}
							comment={reply}
							index={index + 1}
							isLogged={isLogged}
						/>
					))}
				</CommentContainer>
			)}

			{showReply && (
				<CommentContainer border>
					<Submit
						cID={comment._id}
						handleClose={() => setShowReply(false)}
						isLogged={isLogged}
					/>
				</CommentContainer>
			)}

			{modalActive && <ModalOverlay />}

			<DeleteModal
				visible={modalActive}
				cID={comment._id}
				handleClose={() => setModalActive(false)}
			/>
		</CommentContainer>
	);
};

export default Comment;
