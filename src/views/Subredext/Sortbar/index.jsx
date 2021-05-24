import React from 'react';

import {
	RiFireLine,
	RiCopperCoinLine,
	RiFireFill,
	RiCopperCoinFill,
	RiBarChart2Line,
	RiBarChart2Fill,
} from 'react-icons/ri';

import { SortButton, SelectorContainer, SortContainer } from './styles';

const Sortbar = ({ sort, handleSort }) => {
	return (
		<SelectorContainer>
			<SortContainer>
				<SortButton
					onClick={() => handleSort('hot')}
					active={sort === 'hot'}
				>
					{sort === 'hot' ? <RiFireFill /> : <RiFireLine />}
					Hot
				</SortButton>

				<SortButton
					onClick={() => handleSort('new')}
					active={sort === 'new'}
				>
					{sort === 'new' ? <RiCopperCoinFill /> : <RiCopperCoinLine />}
					New
				</SortButton>

				<SortButton
					onClick={() => handleSort('top')}
					active={sort === 'top'}
				>
					{sort === 'top' ? <RiBarChart2Fill /> : <RiBarChart2Line />}
					Top
				</SortButton>
			</SortContainer>
		</SelectorContainer>
	);
};

export default Sortbar;
