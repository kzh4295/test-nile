import React, { useEffect, useState } from 'react';

function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleApply = () => {
    if (min < 0) {
      return;
    }
    if (max < min) {
      return;
    }
    setMin(min);
    setMax(max);
  };

  const handleMinChange = (e: { target: { value: string } }) => {
    const newMin = parseInt(e.target.value, 10);
    if (!isNaN(newMin)) {
      setMin(newMin);
    }
  };

  const handleMaxChange = (e: { target: { value: string } }) => {
    const newMax = parseInt(e.target.value, 10);
    if (!isNaN(newMax)) {
      setMax(newMax);
    }
  };

  useEffect(() => {
    console.log('min', min, 'max', max);
  }, [min, max]);

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='최소'
          value={min}
          onChange={handleMinChange}
        />
        <input
          type='text'
          placeholder='최대'
          value={max}
          onChange={handleMaxChange}
        />
      </div>

      <br />
      <button onClick={handleApply}>적용</button>
    </>
  );
}

export default PriceFilter;
