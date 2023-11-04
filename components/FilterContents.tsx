import { Nft, useCollectionNftTokens } from '@/hooks/useCollectionNftTokens';
import { ChangeEvent, useState } from 'react';

const SORT_OPTIONS = [
  {
    id: 0,
    name: 'highestBid',
  },
  {
    id: 1,
    name: 'lowestBid',
  },
  {
    id: 2,
    name: 'recentlyActive',
  },
  {
    id: 3,
    name: 'recentlyListed',
  },
  {
    id: 4,
    name: 'highestLastSale',
  },
  {
    id: 5,
    name: 'lowestLastSale',
  },
  {
    id: 6,
    name: 'endingSoon',
  },
  {
    id: 7,
    name: 'mostViewed',
  },
];

export const DEFAULT_SORT_OPTION = {
  id: 2,
  name: 'recentlyActive',
};

export interface SelectOption {
  id: number;
  name: string;
}

interface FilterContentsProps {
  nftTokens: Nft[];
}

function FilterContents({ nftTokens }: FilterContentsProps) {
  const [currentSortOption, setCurrentSortOption] =
    useState(DEFAULT_SORT_OPTION);

  const handleSelectValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const sortOption = SORT_OPTIONS.find(
      (selectOption) => selectOption.name === value
    );

    setCurrentSortOption(sortOption!);
  };

  return (
    <>
      <div style={{ width: '500px' }}>
        <select
          value={currentSortOption.name}
          onChange={handleSelectValueChange}
        >
          {SORT_OPTIONS.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {nftTokens.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
}

export default FilterContents;
