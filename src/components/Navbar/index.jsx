import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthModal from './AuthModal';
import Navigator from './Navigator';
import Profile from './Profile';
import { logoutUser } from '../../reducers/userReducer.js';
import { toggleModal } from '../../reducers/modalReducer.js';
import { setNotification } from '../../reducers/notificationReducer';

import logo from '../../assets/Logo.png';
import { Logo, Nav, NavButton, NavEnd, NavMid, NavStart } from './styles.js';

const LinkStyle = { display: 'contents' };

const Navbar = ({ isLogged }) => {
	const dispatch = useDispatch();
	const activeModal = useSelector(({ modal }) => modal);

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(
			setNotification({ type: 'success', message: 'Successfully Logged Out!' })
		);
	};

	const handleSwitch = () => {
		if (activeModal === 'Login') dispatch(toggleModal('Register'));
		if (activeModal === 'Register') dispatch(toggleModal('Login'));
	};

	return (
		<Nav>
			<NavStart>
				<Link to="/" style={LinkStyle}>
					<Logo src={logo} alt="logo" />
				</Link>
			</NavStart>

			<NavMid>
				<Navigator />
			</NavMid>

			<NavEnd>
				{!isLogged && (
					<>
						<NavButton onClick={() => dispatch(toggleModal('Register'))}>
							Register
						</NavButton>
						<NavButton
							onClick={() => dispatch(toggleModal('Login'))}
							filled
						>
							Login
						</NavButton>
					</>
				)}

				{isLogged && <Profile handleLogout={handleLogout} />}
			</NavEnd>

			{activeModal && (
				<AuthModal
					action={activeModal}
					handleClose={() => dispatch(toggleModal(''))}
					handleSwitch={handleSwitch}
				/>
			)}
		</Nav>
	);
};

export default Navbar;
