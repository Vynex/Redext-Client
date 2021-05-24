import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../../assets/Subredext.svg';
import {
	SubredextContainer,
	SubredextIcon,
	SubredextMembers,
	SubredextSection,
	SubredextTitle,
} from './styles';

const LinkStyle = { display: 'contents' };

const Subredext = ({ title, members }) => {
	return (
		<SubredextContainer>
			<SubredextIcon src={Icon} />

			<SubredextSection>
				<Link to={`/r/${title}`} style={LinkStyle}>
					<SubredextTitle>r/{title}</SubredextTitle>
				</Link>
				<SubredextMembers>
					{members} member{members === 1 ? '' : 's'}
				</SubredextMembers>
			</SubredextSection>
		</SubredextContainer>
	);
};

export default Subredext;
