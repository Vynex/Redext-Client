import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Placeholder from '../Placeholder';

import { getComment } from '../../../services/comments';

import {
	CommentContainer,
	CommentContent,
	CommentHeader,
	CommentIcon,
	CommentLink,
	CommentMeta,
	ContentBody,
	ContentHeader,
	ContentMain,
	ContentSide,
} from './styles';
import { RiMessageFill } from 'react-icons/ri';

const Comment = ({ cID }) => {
	const history = useHistory();

	const [comment, setComment] = useState(null);

	useEffect(() => {
		(async () => {
			setComment(await getComment(cID));
		})();
		return () => setComment(null);
	}, [cID]);

	if (!comment) return <Placeholder />;

	const op = comment.post;
	const sub = comment.post.subredext;

	return (
		<CommentContainer>
			<CommentHeader>
				<CommentIcon>
					<RiMessageFill />
				</CommentIcon>

				<CommentMeta>
					<CommentLink primary>{comment.owner.displayName}</CommentLink>{' '}
					commented on
					<CommentLink
						onClick={() =>
							history.push(`/r/${sub.title}/comments/${op._id}`)
						}
					>
						{op.title}
					</CommentLink>
					•
					<CommentLink
						onClick={() => history.push(`/r/${sub.title}`)}
						primary
					>
						r/{sub.title}
					</CommentLink>
					• Posted by
					<CommentLink
						onClick={() => history.push(`/u/${op.owner.displayName}`)}
					>
						{op.owner.displayName}
					</CommentLink>
				</CommentMeta>
			</CommentHeader>

			<CommentContent>
				<ContentSide />
				<ContentSide />

				<ContentMain>
					<ContentHeader>
						<CommentLink
							onClick={() =>
								history.push(`/u/${comment.owner.displayName}`)
							}
							primary
						>
							u/{comment.owner.displayName}
						</CommentLink>
						{comment.score} point{comment.score === 1 ? '' : 's'} ·{' '}
						{moment(comment.createdAt).fromNow()}
					</ContentHeader>

					<ContentBody>{comment.content}</ContentBody>
				</ContentMain>
			</CommentContent>
		</CommentContainer>
	);
};

export default Comment;
