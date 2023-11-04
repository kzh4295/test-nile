import { ChangeEvent, useState } from 'react';

interface PriceFilterProps {
  setPriceOption: (min: number, max: number) => void;
}

export default function PriceFilter({ setPriceOption }: PriceFilterProps) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleApplyClick = () => {
    setPriceOption(min, max);
  };

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber < 0) {
      return;
    }

    setMin(e.target.valueAsNumber);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.valueAsNumber);
  };

  return (
    <>
      <div>
        <input
          type='number'
          placeholder='최소'
          value={min}
          onChange={handleMinChange}
        />
        <input
          type='number'
          placeholder='최대'
          value={max}
          onChange={handleMaxChange}
        />
      </div>

      <br />
      <button type='button' onClick={handleApplyClick}>
        적용
      </button>
    </>
  );
}
