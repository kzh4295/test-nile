import React, { useEffect, useState } from 'react';

interface PriceFilterProps {
  handleApplyClick: (min: number, max: number ) => void;
}

function PriceFilter({ handleApplyClick }: PriceFilterProps) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    console.log('min', min, 'max', max);
  }, [min, max]);

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
      <button onClick={() => handleApplyClick(min, max)}>적용</button>
    </>
  );
}

export default PriceFilter;
