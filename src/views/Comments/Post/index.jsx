import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
	RiMessage3Line,
	RiShareForwardLine,
	RiPencilLine,
	RiArrowUpSLine,
	RiArrowDownSLine,
} from 'react-icons/ri';

import Content from './Content.jsx';
import {
	addUpvotePost,
	addDownvotePost,
	removeVotePost,
} from '../../../reducers/votedPostReducer.js';
import { toggleModal } from '../../../reducers/modalReducer.js';

import {
	ActionEnd,
	ActionStart,
	ActionText,
	PostAction,
	PostActionsContainer,
	PostContainer,
	PostTitle,
	PostMain,
	PostMeta,
	PostMetaContainer,
	PostTop,
	VoteContainer,
	VoteButton,
	PostHeader,
} from './styles.js';
import { setNotification } from '../../../reducers/notificationReducer.js';

const SubStyle = { color: '#d7dadc' };
const MetaStyle = { color: '#6c6e6f' };

const Post = ({ post, vote, isLogged }) => {
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => user);

	const [isEditing, setIsEditing] = useState(false);

	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);

		dispatch(
			setNotification({
				type: 'success',
				message: 'Link Copied to Clipboard!',
			})
		);
	};

	const handleVote = async (direction) => {
		if (!isLogged) return dispatch(toggleModal('Login'));

		dispatch(removeVotePost(post._id));
		if (direction === 1 && vote !== 1) dispatch(addUpvotePost(post._id));
		if (direction === -1 && vote !== -1) dispatch(addDownvotePost(post._id));
	};

	return (
		<PostContainer>
			<PostTop>
				<VoteContainer>
					<VoteButton onClick={() => handleVote(1)}>
						<RiArrowUpSLine color={vote === 1 ? '#ff5200' : 'inherit'} />
					</VoteButton>

					{post.score}

					<VoteButton onClick={() => handleVote(-1)}>
						<RiArrowDownSLine
							color={vote === -1 ? '#7193ff' : 'inherit'}
						/>
					</VoteButton>
				</VoteContainer>

				<PostHeader>
					<PostMetaContainer>
						<PostMeta filled>
							<Link to={`/r/${post.subredext?.title}`} style={SubStyle}>
								r/{post.subredext?.title}
							</Link>
						</PostMeta>

						<PostMeta>
							Posted by{' '}
							<Link
								to={`/u/${post.owner.displayName}`}
								style={MetaStyle}
							>
								u/{post.owner && post.owner.displayName}
							</Link>
						</PostMeta>

						<PostMeta>
							<Link
								to={`/r/${post.subredext.title}/comments/${post._id}`}
								style={MetaStyle}
							>
								{moment(post.createdAt).fromNow()}
							</Link>
						</PostMeta>

						<PostMeta edited>
							{post.editedAt && (
								<>edited {moment(post.editedAt).fromNow()}</>
							)}
						</PostMeta>
					</PostMetaContainer>

					<PostTitle>{post.title}</PostTitle>
				</PostHeader>
			</PostTop>

			<PostMain>
				<Content
					isEditing={isEditing}
					cancelEditing={() => setIsEditing(false)}
					body={post.content}
					pID={post._id}
				/>

				<PostActionsContainer>
					<ActionStart>
						<PostAction>
							<RiMessage3Line />
							<ActionText>{post.comments.length} Comments</ActionText>
						</PostAction>

						{user?.id === post.owner._id && (
							<PostAction
								onClick={() => setIsEditing((prevState) => !prevState)}
							>
								<RiPencilLine />
								<ActionText>Edit</ActionText>
							</PostAction>
						)}

						<PostAction onClick={handleShare}>
							<RiShareForwardLine />
							<ActionText>Share</ActionText>
						</PostAction>
					</ActionStart>

					<ActionEnd>{post.upvoteRatio * 100}% Upvoted</ActionEnd>
				</PostActionsContainer>
			</PostMain>
		</PostContainer>
	);
};

export default Post;
