import { useState } from 'react';

import FilterContents, {
  DEFAULT_SORT_OPTION,
} from '@/components/FilterContents';
import PriceFilter from '@/components/PriceFilter';
import StatusFilter from '@/components/StatusFilter';

import { Option, useCollectionNftTokens } from '@/hooks/useCollectionNftTokens';

function NFTView() {
  const [options, setOptions] = useState<Option>({
    page: 1,
    fromPrice: 0,
    toPrice: 0,
    'orderStatuses[]': [],
    sort: DEFAULT_SORT_OPTION.name,
    slug: 'COOS',
  });
  const { data: nftTokens } = useCollectionNftTokens(options);

  const setPriceOption = (min: number, max: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      fromPrice: min,
      toPrice: max,
    }));
  };

  const setOrderStatuses = (status: string) => {
    setOptions((prevOptions) => {
      if (prevOptions['orderStatuses[]'].includes(status)) {
        return {
          ...prevOptions,
          'orderStatuses[]': prevOptions['orderStatuses[]'].filter(
            (orderStatus) => orderStatus !== status
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
          <StatusFilter setOrderStatuses={setOrderStatuses} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <PriceFilter setPriceOption={setPriceOption} />
        </div>
        <div>
          <FilterContents nftTokens={nftTokens} />
        </div>
      </div>
    </>
  );
}

export default NFTView;
