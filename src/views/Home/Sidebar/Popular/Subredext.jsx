import React from 'react';
import { useDispatch } from 'react-redux';

import {
	newSubscribed,
	removeSubscribed,
} from '../../../../reducers/subscribedReducer.js';
import { toggleModal } from '../../../../reducers/modalReducer.js';
import {
	SubMembers,
	SubSection,
	SubTitle,
	SubDetails,
	SubButton,
} from './styles.js';

const SubStyle = { color: '#d7dadc' };

const Subredext = ({ sub, isSubbed, isLogged }) => {
	const dispatch = useDispatch();

	const handleSubscribe = () => {
		if (!isLogged) return dispatch(toggleModal('Login'));

		if (!isSubbed) dispatch(newSubscribed(sub._id));
		else dispatch(removeSubscribed(sub._id));
	};

	return (
		<SubSection>
			<SubDetails>
				<SubTitle to={`r/${sub.title}`} style={SubStyle}>
					r/{sub.title}
				</SubTitle>

				<SubMembers>
					{sub.memberCount} member{sub.memberCount === 1 ? '' : 's'}
				</SubMembers>
			</SubDetails>

			<SubButton filled={!isSubbed} onClick={handleSubscribe}>
				{isSubbed ? 'Leave' : 'Join'}
			</SubButton>
		</SubSection>
	);
};

export default Subredext;
