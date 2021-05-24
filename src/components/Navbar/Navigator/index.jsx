import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
	RiArrowDownSFill,
	RiBuilding3Fill,
	RiEdit2Fill,
	RiFlightTakeoffFill,
	RiUser3Fill,
} from 'react-icons/ri';
import {
	NavigatorContainer,
	NavigatorSelect,
	NavigatorOption,
	NavigatorLabel,
} from './styles.js';

const BlueStyle = { color: '#0079d3', marginRight: '1rem', fontSize: '1.3rem' };
const OrangeStyle = {
	color: '#FF4500',
	marginRight: '1rem',
	fontSize: '1.3rem',
};

const Navigator = () => {
	const location = useLocation();
	const ref = useRef();

	const user = useSelector(({ user }) => user);
	const subscribed = useSelector(({ subscribed }) => subscribed);

	const [current, setCurrent] = useState('');
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (location.pathname === '/') {
			setCurrent('Home');
		}

		if (location.pathname.startsWith('/r/')) {
			setCurrent(`r/${location.pathname.split('/')[2]}`);
		}

		if (location.pathname.endsWith('/submit')) {
			setCurrent('Create Post');
		}

		if (location.pathname === '/subredext/submit') {
			setCurrent('Create Community');
		}

		if (location.pathname.startsWith('/u/')) {
			setCurrent(`u/${location.pathname.split('/')[2]}`);
		}
	}, [location]);

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

	const toggleVisible = () => setIsActive((prevState) => !prevState);

	if (!user) return null;

	return (
		<NavigatorContainer onClick={toggleVisible} ref={ref} active={isActive}>
			{current}
			<RiArrowDownSFill />
			<NavigatorSelect visible={isActive}>
				<NavigatorLabel>Feeds</NavigatorLabel>
				<NavigatorOption to="/">
					<RiBuilding3Fill style={BlueStyle} />
					Home
				</NavigatorOption>

				<NavigatorLabel>Subscribed</NavigatorLabel>
				{subscribed.map((sub) => (
					<NavigatorOption key={sub._id} to={`/r/${sub.title}`}>
						<RiFlightTakeoffFill style={OrangeStyle} />
						r/{sub.title}
					</NavigatorOption>
				))}

				<NavigatorLabel>Other</NavigatorLabel>
				<NavigatorOption to={`/u/${user.displayName}`}>
					<RiUser3Fill style={BlueStyle} />
					u/{user.displayName}
				</NavigatorOption>
				<NavigatorOption to="/submit">
					<RiEdit2Fill style={BlueStyle} />
					Create Post
				</NavigatorOption>
				<NavigatorOption to="/subredext/submit">
					<RiEdit2Fill style={BlueStyle} />
					Create Community
				</NavigatorOption>
			</NavigatorSelect>
		</NavigatorContainer>
	);
};

export default Navigator;
