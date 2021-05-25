import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
	RiMessage3Line,
	RiShareForwardLine,
	RiArrowUpSLine,
	RiArrowDownSLine,
} from 'react-icons/ri';
import Placeholder from './Placeholder.jsx';
import {
	addUpvotePost,
	addDownvotePost,
	removeVotePost,
} from '../../reducers/votedPostReducer.js';
import { toggleModal } from '../../reducers/modalReducer.js';
import { getPost } from '../../services/posts.js';
import {
	ActionText,
	PostAction,
	PostActionsContainer,
	PostContainer,
	PostContent,
	PostHeader,
	PostMain,
	PostMeta,
	PostMetaContainer,
	PostSide,
	VoteButton,
} from './styles.js';
import { setNotification } from '../../reducers/notificationReducer.js';

const LinkStyle = { color: 'inherit' };
const ActionStyle = { color: 'inherit', textDecoration: 'none' };

const Post = ({ post: pID, vote: initialVote, isLogged }) => {
	const dispatch = useDispatch();

	const [vote, setVote] = useState(null);
	const [post, setPost] = useState(null);

	useEffect(() => {
		setVote(initialVote);
		(async () => {
			setPost(await getPost(pID));
		})();
		return () => setPost(null);
	}, [initialVote, pID]);

	const handleVote = async (direction) => {
		if (!post.deleted) {
			if (!isLogged) return dispatch(toggleModal('Login'));

			dispatch(removeVotePost(post._id));
			if (direction === 1 && vote !== 1) dispatch(addUpvotePost(post._id));
			if (direction === -1 && vote !== -1)
				dispatch(addDownvotePost(post._id));
		}
	};

	const handleShare = () => {
		const url = `/r/${post.subredext.title}/comments/${post._id}`;
		navigator.clipboard.writeText(window.location.hostname + url);

		dispatch(
			setNotification({
				type: 'success',
				message: 'Link Copied to Clipboard!',
			})
		);
	};

	if (post === null) return <Placeholder />;

	const commentCount = post.comments?.length;

	return (
		<PostContainer>
			<PostSide>
				<VoteButton onClick={() => handleVote(1)}>
					<RiArrowUpSLine color={vote === 1 ? '#ff5200' : 'inherit'} />
				</VoteButton>

				{post.score}

				<VoteButton onClick={() => handleVote(-1)}>
					<RiArrowDownSLine color={vote === -1 ? '#7193ff' : 'inherit'} />
				</VoteButton>
			</PostSide>

			<PostMain>
				<PostMetaContainer>
					<PostMeta filled>
						<Link to={`/r/${post.subredext.title}`} style={LinkStyle}>
							r/{post.subredext && post.subredext.title}
						</Link>
					</PostMeta>

					<PostMeta>
						Posted by{' '}
						{post.deleted ? (
							'[deleted]'
						) : (
							<Link
								to={`/u/${post.owner.displayName}`}
								style={LinkStyle}
							>
								u/{post.owner && post.owner.displayName}
							</Link>
						)}
					</PostMeta>

					<PostMeta>
						<Link
							to={`/r/${post.subredext.title}/comments/${post._id}`}
							style={LinkStyle}
						>
							{moment(post.createdAt).fromNow()}
						</Link>
					</PostMeta>

					<PostMeta edited>
						{post.edited && <>edited {moment(post.editedAt).fromNow()}</>}
					</PostMeta>
				</PostMetaContainer>

				<PostHeader>{post.title}</PostHeader>
				<PostContent>{post.content}</PostContent>

				<PostActionsContainer>
					<Link
						to={`/r/${post.subredext.title}/comments/${post._id}`}
						style={ActionStyle}
					>
						<PostAction>
							<RiMessage3Line />
							<ActionText>{commentCount} Comments</ActionText>
						</PostAction>
					</Link>

					<PostAction onClick={handleShare}>
						<RiShareForwardLine />
						<ActionText>Share</ActionText>
					</PostAction>
				</PostActionsContainer>
			</PostMain>
		</PostContainer>
	);
};

export default Post;
