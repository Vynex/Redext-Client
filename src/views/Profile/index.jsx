import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Posts from './Posts';
import Comments from './Comments';
import Moderated from './Sidebar/Moderated';
import About from './Sidebar/About';

import { clearProfile, initProfile } from '../../reducers/profileReducer';

import { Main, Content, Sidebar } from '../styles';
import { HeaderTab, ProfileHeader } from './styles';

const Profile = () => {
	const dispatch = useDispatch();
	const { username } = useParams();

	const user = useSelector(({ user }) => user);
	const profile = useSelector(({ profile }) => profile);
	const [tab, setTab] = useState('posts');

	useEffect(() => {
		document.title = `u/${username} - Redext`;
	}, [username]);

	useEffect(() => {
		dispatch(initProfile(username));

		return () => dispatch(clearProfile());
	}, [dispatch, username]);

	if (!profile.loaded) return null;

	return (
		<>
			<ProfileHeader>
				<HeaderTab active={tab === 'posts'} onClick={() => setTab('posts')}>
					Posts
				</HeaderTab>

				<HeaderTab
					active={tab === 'comments'}
					onClick={() => setTab('comments')}
				>
					Comments
				</HeaderTab>
			</ProfileHeader>

			<Main noMargin>
				<Content>
					{tab === 'posts' && (
						<Posts
							username={profile.displayName}
							isLogged={user !== null}
						/>
					)}

					{tab === 'comments' && (
						<Comments
							username={profile.displayName}
							isLogged={user !== null}
						/>
					)}
				</Content>

				<Sidebar>
					<About profile={profile} />

					<Moderated owned={profile.subredexts} />
				</Sidebar>
			</Main>
		</>
	);
};

export default Profile;
