import FilterContents from '@/components/FilterContents';
import PriceFilter from '@/components/PriceFilter';
import StatusFilter from '@/components/StatusFilter';

function NFTView() {
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
          <PriceFilter />
        </div>
        <div>
          <FilterContents />
        </div>
      </div>
    </>
  );
}

export default NFTView;
