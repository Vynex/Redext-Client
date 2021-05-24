import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
	RiArrowUpSLine,
	RiArrowDownSLine,
	RiMessage3Fill,
	RiShareForwardFill,
} from 'react-icons/ri';
import {
	addDownvotePost,
	addUpvotePost,
	removeVotePost,
} from '../../../reducers/votedPostReducer';
import { toggleModal } from '../../../reducers/modalReducer';
import { setNotification } from '../../../reducers/notificationReducer';
import { getPost } from '../../../services/posts';
import {
	PostContainer,
	PostHeader,
	PostSide,
	PostMain,
	VoteButton,
	PostMeta,
	PostMetaContainer,
	PostActionsContainer,
	PostAction,
} from './styles';
import Placeholder from '../Placeholder';

const LinkStyle = { color: 'inherit' };
const ActionStyle = { color: 'inherit', textDecoration: 'none' };
const IconStyle = { marginRight: '0.2rem' };

const Post = ({
	isLogged,
	vote: initialVote,
	pID,
	top = false,
	bottom = false,
}) => {
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
		if (!isLogged) return dispatch(toggleModal('Login'));

		dispatch(removeVotePost(post._id));
		if (direction === 1 && vote !== 1) dispatch(addUpvotePost(post._id));
		if (direction === -1 && vote !== -1) dispatch(addDownvotePost(post._id));
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

	if (!post) return <Placeholder />;

	return (
		<PostContainer top={top} bottom={bottom}>
			<PostSide top={top} bottom={bottom}>
				<VoteButton onClick={() => handleVote(1)}>
					<RiArrowUpSLine color={vote === 1 ? '#ff5200' : 'inherit'} />
				</VoteButton>

				{post.score}

				<VoteButton onClick={() => handleVote(-1)}>
					<RiArrowDownSLine color={vote === -1 ? '#7193ff' : 'inherit'} />
				</VoteButton>
			</PostSide>

			<PostMain>
				<PostHeader>{post.title}</PostHeader>

				<PostMetaContainer>
					<PostMeta primary>
						<Link to={`/r/${post.subredext.title}`} style={LinkStyle}>
							r/{post.subredext.title}
						</Link>
					</PostMeta>

					<PostMeta>
						Posted by{' '}
						<Link to={`/u/${post.owner.displayName}`} style={LinkStyle}>
							u/{post.owner.displayName}
						</Link>
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

				<PostActionsContainer>
					<Link
						to={`/r/${post.subredext.title}/comments/${post._id}`}
						style={ActionStyle}
					>
						<PostAction>
							<RiMessage3Fill style={IconStyle} />
							{post.comments.length} Comments
						</PostAction>
					</Link>

					<PostAction onClick={handleShare}>
						<RiShareForwardFill style={IconStyle} />
						Share
					</PostAction>
				</PostActionsContainer>
			</PostMain>
		</PostContainer>
	);
};

export default Post;
