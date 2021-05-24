import React from 'react';

import {
	RiFireLine,
	RiFireFill,
	RiCopperCoinLine,
	RiCopperCoinFill,
	RiBarChart2Line,
	RiBarChart2Fill,
	RiBuilding3Line,
	RiBuilding3Fill,
	RiEarthLine,
	RiEarthFill,
} from 'react-icons/ri';

import { SortButton, SelectorContainer, SortContainer } from './styles';

const Sortbar = ({ isLogged, sort, scope, handleScope, handleSort }) => {
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

			<SortContainer>
				{isLogged ? (
					<SortButton
						onClick={() => handleScope('user')}
						active={scope === 'user'}
					>
						{scope === 'user' ? <RiBuilding3Fill /> : <RiBuilding3Line />}
						You
					</SortButton>
				) : null}
				<SortButton
					onClick={() => handleScope('all')}
					active={scope === 'all'}
				>
					{scope === 'all' ? <RiEarthFill /> : <RiEarthLine />}
					All
				</SortButton>
			</SortContainer>
		</SelectorContainer>
	);
};

export default Sortbar;
