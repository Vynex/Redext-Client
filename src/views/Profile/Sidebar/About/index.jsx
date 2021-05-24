import React, { useEffect } from 'react';
import moment from 'moment';
import { RiCake3Fill, RiSettings5Fill } from 'react-icons/ri';
import Snoo from '../../../../assets/Snoo.png';
import { Widget } from '../../../styles';
import {
	AboutHeader,
	AboutContent,
	SnooAvatar,
	AboutAvatar,
	AboutBanner,
	AboutTitle,
	AboutSubTitle,
	AboutSection,
	AboutSubSection,
	Attribute,
	AttributeTitle,
	AttributeContent,
} from './styles';

const IconStyle = { color: '#24a0ed', marginRight: '0.2rem' };

const About = ({ profile }) => {
	useEffect(() => {
	}, [profile]);

	return (
		<Widget>
			<AboutHeader>
				<AboutBanner />

				<AboutAvatar>
					<SnooAvatar src={Snoo} />
				</AboutAvatar>
			</AboutHeader>

			<AboutContent>
				<AboutSection>
					<AboutTitle>{profile.displayName}</AboutTitle>

					<AboutSubTitle>
						u/{profile.displayName} ·{' '}
						{moment(profile.createdAt).fromNow()}
					</AboutSubTitle>
				</AboutSection>

				<AboutSection>
					<AboutSubSection>
						<Attribute>
							<AttributeTitle>Post Karma</AttributeTitle>

							<AttributeContent>
								<RiSettings5Fill style={IconStyle} />
								{profile.postKarma}
							</AttributeContent>
						</Attribute>

						<Attribute>
							<AttributeTitle>Comment Karma</AttributeTitle>

							<AttributeContent>
								<RiSettings5Fill style={IconStyle} />
								{profile.commentKarma}
							</AttributeContent>
						</Attribute>
					</AboutSubSection>

					<AboutSubSection>
						<Attribute>
							<AttributeTitle>Cake Day</AttributeTitle>

							<AttributeContent>
								<RiCake3Fill style={IconStyle} />
								{moment(profile.createdAt).format('Do MMM[,] YYYY')}
							</AttributeContent>
						</Attribute>
					</AboutSubSection>
				</AboutSection>
			</AboutContent>
		</Widget>
	);
};

export default About;
