import React from 'react';
import { RiUser3Line, RiCakeLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toggleModal } from '../../../reducers/modalReducer';
import {
	newSubscribed,
	removeSubscribed,
} from '../../../reducers/subscribedReducer';
import Description from './Description';
import {
	InfoBox,
	InfoSection,
	InfoContent,
	InfoTitle,
	InfoEnd,
	InfoButton,
} from './styles';

const iconStyle = { margin: '0 0.3rem' };

const About = ({ subredext, sticky = false }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector(({ user }) => user);
	const subscribed = useSelector(({ subscribed }) => subscribed);
	const subscribedIds = subscribed.map((sub) => sub._id);

	const isSubbed = subscribedIds.includes(subredext?._id);

	const handleSubscribe = () => {
		if (user === null) return dispatch(toggleModal('Login'));

		if (!isSubbed) dispatch(newSubscribed(subredext._id));
		else dispatch(removeSubscribed(subredext._id));
	};

	const handleSubmit = () => {
		if (user === null) return dispatch(toggleModal('Login'));

		history.push(`/r/${subredext.title}/submit`);
	};

	if (!subredext) return null;

	const isOwned = user && user.id === subredext.owner;
	const date = new Date(subredext.createdAt);

	return (
		<InfoBox sticky={sticky}>
			<InfoTitle>About Community</InfoTitle>

			<InfoSection>
				<Description
					isOwned={isOwned}
					link={subredext.title}
					content={subredext.description}
				/>
			</InfoSection>

			<InfoSection>
				<InfoContent>
					<RiUser3Line style={iconStyle} />
					{subredext.memberCount} member
					{subredext.memberCount === 1 ? '' : 's'}
				</InfoContent>

				<InfoContent>
					<RiCakeLine style={iconStyle} />
					Created {date.toLocaleDateString()}
				</InfoContent>
			</InfoSection>

			<InfoEnd>
				<InfoButton onClick={handleSubscribe} filled={!isSubbed}>
					{isSubbed ? 'Leave' : 'Join'}
				</InfoButton>

				<InfoButton onClick={handleSubmit} filled>
					Create Post
				</InfoButton>
			</InfoEnd>
		</InfoBox>
	);
};

export default About;
