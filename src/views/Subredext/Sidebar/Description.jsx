import React, { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { editSubredext } from '../../../reducers/subredextReducer';
import {
	DescriptionBox,
	DescriptionText,
	DescriptionEdit,
	DescriptionEnd,
	DescriptionAction,
} from './styles';

const iconStyle = { margin: '0 0.3rem' };

const Description = ({ isOwned, link, content }) => {
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(false);
	const [description, setDescription] = useState(content);

	if (!isOwned) return <>{description}</>;

	const handleCancel = () => {
		setIsActive(false);
		setDescription(content);
	};

	const handleSave = () => {
		setIsActive(false);

		if (content !== description) {
			dispatch(editSubredext(link, description));
		}
	};

	return (
		<>
			<DescriptionBox onClick={() => setIsActive(true)}>
				<DescriptionText hidden={isActive}>
					{description}
					<RiPencilLine style={iconStyle} />
				</DescriptionText>

				{isActive && (
					<DescriptionEdit
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						maxLength="500"
					/>
				)}
			</DescriptionBox>

			{isActive && (
				<DescriptionEnd>
					<DescriptionAction onClick={handleCancel} red>
						Cancel
					</DescriptionAction>
					<DescriptionAction onClick={handleSave} red={false}>
						Save
					</DescriptionAction>
				</DescriptionEnd>
			)}
		</>
	);
};

export default Description;
