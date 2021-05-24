import React from 'react';
import { RiFileList3Line } from 'react-icons/ri';

import {
	InfoBox,
	SubTitle,
	InfoContent,
	SubSection,
	RulesHeader,
} from './styles';

const iconStyle = { marginRight: '0.5rem' };

const Rules = () => {
	return (
		<InfoBox>
			<RulesHeader />

			<InfoContent>
				<SubTitle>
					<RiFileList3Line style={iconStyle} />
					Posting to Redext
				</SubTitle>
				<SubSection>1. Remember the human</SubSection>
				<SubSection>2. Behave like you would in real life</SubSection>
				<SubSection>3. Look for the original source of content</SubSection>
				<SubSection>4. Search for duplicates before posting</SubSection>
				<SubSection noBorder>5. Read the community’s rules</SubSection>
			</InfoContent>
		</InfoBox>
	);
};

export default Rules;
