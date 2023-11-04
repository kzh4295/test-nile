import { ChangeEvent, useReducer } from 'react';

interface StatusFilters {
  id: number;
  title: string;
  value: string;
  checked: boolean;
}
const STATUS_FILTERS: StatusFilters[] = [
  { id: 0, title: '최초 판매중', value: 'nowOffering', checked: false },
  { id: 1, title: '판매중', value: 'onMarket', checked: false },
  { id: 2, title: '제안 가능', value: 'openForOffers', checked: false },
  { id: 3, title: '옥션 종료', value: 'auctionClosed', checked: false },
  { id: 4, title: '판매 예정', value: 'upComing', checked: false },
];

interface Action {
  type: string;
  value: string;
}

const reducer = (statusFiltersState: StatusFilters[], action: Action) => {
  switch (action.type) {
    case 'toggle':
      return statusFiltersState.map((statusFilter) => {
        if (statusFilter.value === action.value) {
          return {
            ...statusFilter,
            checked: !statusFilter.checked,
          };
        }

        return statusFilter;
      });

    default:
      return statusFiltersState;
  }
};

interface StatusFilterProps {
  setOrderStatuses: (status: string) => void;
}

function StatusFilter({ setOrderStatuses }: StatusFilterProps) {
  const [statusFilters, dispatch] = useReducer(reducer, STATUS_FILTERS);

  const handleStatusFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch({ type: 'toggle', value });
    setOrderStatuses(value);
  };

  return (
    <ul>
      {statusFilters.map(({ id, title, value, checked }) => (
        <li key={id}>
          <label>
            <input
              type='checkbox'
              name={title}
              value={value}
              checked={checked}
              onChange={handleStatusFilterChange}
            />
            {title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default StatusFilter;
