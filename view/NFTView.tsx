import { useEffect, useState } from 'react';
import axios from 'axios';
import { toWei } from 'web3-utils';

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
  fromPrice?: string;
  toPrice?: string;
  'orderStatuses[]': string[];
  sort: string;
  slug: string;
}
interface NFTItem {
  imageUrl: string;
  name: string;
  amount: number;
  status: string;
}

export default function NFTView() {
  const [selectQuery, setSelectQuery] =
    useState<SelectOption[]>(FILTER_CONTENTS);
  const [list, setList] = useState<NFTItem[]>([]);
  const [filterOptions, setFilterOptions] = useState<Options>({
    slug: 'COOS',
    // fromPrice: 0,
    // toPrice: 0,
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
        const refinedCollection = items.map(
          ({ imageUrl, name, amount, status }: NFTItem) => ({
            image: imageUrl,
            name,
            amount,
            status,
          })
        );
        setList(refinedCollection);
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
      const updatedFilterOptions = {
        ...filterOptions,
        ...(selectedQuery && { sort: selectedQuery.name }),
        ...(filterOptions.fromPrice > 0 && {
          fromPrice: filterOptions.fromPrice,
        }),
        ...(filterOptions.toPrice > 0 && { toPrice: filterOptions.toPrice }),
      };

      fetchData(updatedFilterOptions);
    }
  }, [selectQuery, filterOptions]);

  const handleApplyClick = (min: number, max: number) => {
    const fromPrice = toWei(String(min));
    const toPrice = toWei(String(max));

    setFilterOptions((prevFilter) => ({
      ...prevFilter,
      fromPrice,
      toPrice,
    }));
  };

  const handleApplyStatusFilterCheck = (status: string) => {
    setFilterOptions((prevOptions: any) => {
      if (prevOptions['orderStatuses[]'].includes(status)) {
        return {
          ...prevOptions,
          'orderStatuses[]': prevOptions['orderStatuses[]'].filter(
            (orderStatus: any) => orderStatus !== status
          ),
        };
      }

      return {
        ...prevOptions,
        'orderStatuses[]': [...prevOptions['orderStatuses[]'], status],
      };
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <StatusFilter
            handleApplyStatusFilterCheck={handleApplyStatusFilterCheck}
          />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <PriceFilter handleApplyPriceFilterClick={handleApplyClick} />
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
