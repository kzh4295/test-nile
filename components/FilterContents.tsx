import React, { useEffect, useState } from 'react';

interface SelectObj {
  id: number;
  name: string;
  checked: boolean;
}

function FilterContents() {
  const [selectQuery, setSelectQuery] = useState<SelectObj[]>([
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
      checked: false,
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
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const selectedQuery = selectQuery.find((item) => item.checked);
    if (selectedQuery) {
      fetch(
        `https://api.nile.io/nft/collections/tokens?slug=TTPS&page=1&sort=${selectedQuery.name}`
      )
        .then((res) => res.json())
        .then((data) => setList(data?.data))
        .catch((error) => console.log(error));
    }
  }, [selectQuery]);

  return (
    <div style={{ width: '500px' }}>
      <select
        onChange={(e: { target: { value: string } }) => {
          const selectedName = e.target.value;
          const updatedSelectQuery = selectQuery.map((item) => ({
            ...item,
            checked: item.name === selectedName,
          }));
          setSelectQuery(updatedSelectQuery);
          console.log(selectQuery);
        }}
      >
        {selectQuery.map((ele) => (
          <option key={ele.id} value={ele.name}>
            {ele.name}
          </option>
        ))}
      </select>
      <div> {JSON.stringify(list)}</div>
    </div>
  );
}

export default FilterContents;
