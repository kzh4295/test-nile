import Image from 'next/image';
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
  ]);
  const [list, setList] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const selectedQuery = selectQuery.find((item) => item.checked);

    async function fetchData(param: string) {
      try {
        const res = await fetch(
          `https://api.nile.io/nft/collections/tokens?slug=TTPS&page=1&sort=${param}`
        );
        const data = await res.json();
        const items = data.data?.items;

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

    if (selectedQuery) {
      fetchData(selectedQuery.name);
    }
  }, [selectQuery]);

  return (
    <>
      <div style={{ width: '500px' }}>
        <select
          value={
            selectQuery.find((item) => item.checked)?.name || 'recentlyActive'
          }
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedName = e.target.value;
            const updatedSelectQuery = selectQuery.map((item) => ({
              ...item,
              checked: item.name === selectedName,
            }));
            setSelectQuery(updatedSelectQuery);
          }}
        >
          {selectQuery.map((ele) => (
            <option key={ele.id} value={ele.name}>
              {ele.name}
            </option>
          ))}
        </select>
      </div>

      {list.map((ele) => (
        <div key={ele.name}>{ele.name}</div>
      ))}
    </>
  );
}

export default FilterContents;
