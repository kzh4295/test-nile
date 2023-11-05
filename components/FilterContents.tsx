import { SelectOption } from '@/view/NFTView';

interface FilterContentsProps {
  list: string[];
  selectQuery: SelectOption[];
  setSelectQuery: (param: SelectOption[]) => void;
}

function FilterContents({
  list,
  selectQuery,
  setSelectQuery,
}: FilterContentsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const updatedSelectQuery = selectQuery.map((item) => ({
      ...item,
      checked: item.name === value,
    }));
    setSelectQuery(updatedSelectQuery);
  };

  return (
    <>
      <div style={{ width: '500px' }}>
        <select
          value={
            selectQuery.find((item) => item.checked)?.name || 'recentlyActive'
          }
          onChange={handleChange}
        >
          {selectQuery.map((ele) => (
            <option key={ele.id} value={ele.name}>
              {ele.name}
            </option>
          ))}
        </select>
      </div>

      {list.map((ele, idx) => (
        <div key={idx}>{JSON.stringify(ele)}</div>
      ))}
    </>
  );
}

export default FilterContents;
