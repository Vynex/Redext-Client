import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setComments } from '../../../reducers/commentReducer';
import { SortbarContainer, SortButton } from './styles';

const Sortbar = ({ pID }) => {
	const dispatch = useDispatch();

	const [sort, setSort] = useState('best');

	const handleSort = (sort) => {
		setSort(sort);
		dispatch(setComments(pID, sort));
	};

	return (
		<>
			<SortbarContainer>
				Sort by
				<SortButton
					onClick={() => handleSort('best')}
					active={sort === 'best'}
				>
					Best
				</SortButton>
				<SortButton
					onClick={() => handleSort('top')}
					active={sort === 'top'}
				>
					Top
				</SortButton>
				<SortButton
					onClick={() => handleSort('new')}
					active={sort === 'new'}
				>
					New
				</SortButton>
			</SortbarContainer>
		</>
	);
};

export default Sortbar;
