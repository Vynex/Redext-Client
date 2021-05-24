import React from 'react';
import { useSelector } from 'react-redux';
import Icon from '../../assets/Notification.svg';
import {
	NotificationContainer,
	NotificationIcon,
	NotificationMain,
	NotificationMessage,
	NotificationSide,
} from './styles';

const Notification = () => {
	const notification = useSelector(({ notification }) => notification);

	if (!notification.type) return null;

	return (
		<NotificationContainer>
			<NotificationSide success={notification.type === 'success'} />

			<NotificationMain>
				<NotificationIcon src={Icon} />
				<NotificationMessage>{notification.message}</NotificationMessage>
			</NotificationMain>
		</NotificationContainer>
	);
};

export default Notification;
