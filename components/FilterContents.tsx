interface NFTItem {
  imageUrl: string;
  name: string;
  amount: number;
  status: string;
}
export interface SelectOption {
  id: number;
  name: string;
  checked: boolean;
}

interface FilterContentsProps {
  list: NFTItem[];
  selectQuery: SelectOption[];
  setSelectQuery: (query: SelectOption[]) => void;
}

export default function FilterContents({
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
          {selectQuery.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {list.map(({ name }, idx) => (
        <div key={idx}>{name}</div>
      ))}
    </>
  );
}
