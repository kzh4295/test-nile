import { useEffect, useState } from 'react';
import axios from 'axios';

import FilterContents from '@/components/FilterContents';
import PriceFilter from '@/components/PriceFilter';
import StatusFilter from '@/components/StatusFilter';

const FILTER_CONTENTS = [
  {
    id: 0,
    name: 'highestBid',
    checked: false,
  },
  {
    id: 1,
    name: 'lowestBid',
    checked: false,
  },
  {
    id: 2,
    name: 'recentlyActive',
    checked: true,
  },
  {
    id: 3,
    name: 'recentlyListed',
    checked: false,
  },
  {
    id: 4,
    name: 'highestLastSale',
    checked: false,
  },
  {
    id: 5,
    name: 'lowestLastSale',
    checked: false,
  },
  {
    id: 6,
    name: 'endingSoon',
    checked: false,
  },
  {
    id: 7,
    name: 'mostViewed',
    checked: false,
  },
];

export interface SelectOption {
  id: number;
  name: string;
  checked: boolean;
}

export interface Options {
  page: number;
  fromPrice: number;
  toPrice: number;
  'orderStatuses[]': [];
  sort: string;
  slug: string;
}

function NFTView() {
  const [selectQuery, setSelectQuery] =
    useState<SelectOption[]>(FILTER_CONTENTS);
  const [list, setList] = useState([]);
  const [filterOptions, setFilterOptions] = useState<Options>({
    slug: 'COOS',
    fromPrice: 0,
    toPrice: 0,
    'orderStatuses[]': [],
    page: 1,
    sort: 'recentlyActive',
  });

  async function fetchData(param: Options) {
    try {
      const response = await axios.get(
        `https://api.nile.io/nft/collections/tokens`,
        {
          params: param,
        }
      );

      const items = response.data.data?.items;

      if (items) {
        const tt = items.map((ele: any) => ({
          image: ele.imageUrl,
          name: ele.name,
          amount: ele.amount,
          status: ele.status,
        }));
        setList(tt);
      } else {
        console.log('Items data is null or undefined.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const selectedQuery = selectQuery.find((item) => item.checked);

    if (selectedQuery) {
      setFilterOptions({ ...filterOptions, sort: selectedQuery.name });
      // fetchData(filterOptions);
    }
  }, [selectQuery, filterOptions]);

  const handleApplyClick = (min: number, max: number) => {
    setFilterOptions({ ...filterOptions, fromPrice: min, toPrice: max });
    // fetchData(filterOptions);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <StatusFilter />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <PriceFilter handleApplyClick={handleApplyClick} />
        </div>
        <div>
          <FilterContents
            list={list}
            selectQuery={selectQuery}
            setSelectQuery={setSelectQuery}
          />
        </div>
      </div>
    </>
  );
}

export default NFTView;
