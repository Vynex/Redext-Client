import React from 'react';
import { Widget } from '../../../styles';
import { OwnedSection, OwnedTitle } from './styles';
import Subredext from './Subredext';

const Moderated = ({ owned }) => {
	if (!owned) return null;

	return (
		<Widget>
			<OwnedTitle>Owned Communities ({owned.length})</OwnedTitle>

			<OwnedSection>
				{owned.map((subredext) => (
					<Subredext
						key={subredext._id}
						title={subredext.title}
						members={subredext.memberCount}
					/>
				))}
			</OwnedSection>
		</Widget>
	);
};

export default Moderated;
