import { useState } from 'react';

interface PriceFilterProps {
  handleApplyPriceFilterClick: (min: number, max: number) => void;
}

export default function PriceFilter({ handleApplyPriceFilterClick }: PriceFilterProps) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <>
      <div>
        <input
          type='number'
          placeholder='최소'
          value={min}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMin(e.target.valueAsNumber);
          }}
        />
        <input
          type='number'
          placeholder='최대'
          value={max}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMax(e.target.valueAsNumber);
          }}
        />
      </div>

      <br />
      <button onClick={() => handleApplyPriceFilterClick(min, max)}>적용</button>
    </>
  );
}
