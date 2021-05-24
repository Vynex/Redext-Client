import React from 'react';
import { RiUser3Line, RiCakeLine, RiChat3Line } from 'react-icons/ri';

import {
	InfoBox,
	SubHeader,
	SubTitle,
	InfoContent,
	SubSection,
} from './styles';

const iconStyle = { marginRight: '0.5rem' };

const About = ({ sub }) => {
	if (!sub) return null;
	const date = new Date(sub.createdAt);

	return (
		<>
			<InfoBox>
				<SubHeader />

				<InfoContent>
					<SubTitle>
						<RiChat3Line style={iconStyle} />
						r/{sub.title}
					</SubTitle>

					<SubSection>{sub.description}</SubSection>

					<SubSection>
						<RiUser3Line style={iconStyle} />
						{sub.memberCount} Members
					</SubSection>
					
					<SubSection noBorder>
						<RiCakeLine style={iconStyle} />
						Created {date.toLocaleDateString()}
					</SubSection>
				</InfoContent>
			</InfoBox>
		</>
	);
};

export default About;
