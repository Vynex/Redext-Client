import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
	RiArrowDownSFill,
	RiContactsBook2Fill,
	RiLogoutBoxFill,
	RiSettings5Fill,
} from 'react-icons/ri';
import ProfileIcon from '../../../assets/Profile.jpg';
import {
	ProfileContainer,
	ProfileLabel,
	ProfileSelect,
	ProfileOption,
	ProfileUsername,
	ProfileKarma,
} from './styles.js';

const KarmaStyle = { color: '#FF4500', marginRight: '0.2rem' };
const IconStyle = { marginRight: '1rem', fontSize: '1.3rem' };

const Profile = ({ handleLogout }) => {
	const user = useSelector(({ user }) => user);
	const ref = useRef();

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleBodyClick = (e) => {
			if (ref.current && ref.current.contains(e.target)) return;
			setIsActive(false);
		};

		document.body.addEventListener('click', handleBodyClick, {
			capture: true,
		});

		return () =>
			document.removeEventListener('click', handleBodyClick, {
				capture: true,
			});
	}, []);

	return (
		<ProfileContainer
			onClick={() => setIsActive((prevState) => !prevState)}
			active={isActive}
			ref={ref}
		>
			<img src={ProfileIcon} alt="" style={{ width: '1.8rem' }} />

			<ProfileLabel>
				<ProfileUsername>u/{user.displayName}</ProfileUsername>
				<ProfileKarma>
					<RiSettings5Fill style={KarmaStyle} />
					{user.karma} karma
				</ProfileKarma>
			</ProfileLabel>
			<RiArrowDownSFill />

			<ProfileSelect visible={isActive}>
				<ProfileOption to={`/u/${user.displayName}`}>
					<RiContactsBook2Fill style={IconStyle} />
					Profile
				</ProfileOption>

				<ProfileOption to="/" onClick={handleLogout}>
					<RiLogoutBoxFill style={IconStyle} /> Logout
				</ProfileOption>
			</ProfileSelect>
		</ProfileContainer>
	);
};

export default Profile;
