import { ChangeEvent, useReducer } from 'react';

const STATUS_FILTERS: StatusFilter[] = [
  { id: 0, title: '최초 판매중', value: 'nowOffering' },
  { id: 1, title: '판매중', value: 'onMarket' },
  { id: 2, title: '제안 가능', value: 'openForOffers' },
  { id: 3, title: '옥션 종료', value: 'auctionClosed' },
  { id: 4, title: '판매 예정', value: 'upComing' },
];

interface StatusFilter {
  id: number;
  title: string;
  value: string;
}

interface StatusAction {
  type: string;
  id: number;
}

interface StatusFilterProps {
  handleApplyStatusFilterCheck: (value: string) => void;
}
const reducer = (statusFilterState: StatusFilter[], action: StatusAction) => {
  switch (action.type) {
    case 'toggle':
      return statusFilterState.map((statusFilterState: StatusFilter) => {
        if (statusFilterState.id === action.id) {
          return {
            ...statusFilterState,
          };
        }
        return statusFilterState;
      });
    default:
      return statusFilterState;
  }
};

export default function StatusFilter({ handleApplyStatusFilterCheck }: StatusFilterProps) {
  const [statusFilterState, dispatch] = useReducer(reducer, STATUS_FILTERS);
  const handleCheck = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch({ type: 'toggle', id });
    handleApplyStatusFilterCheck(value);
  };

  return (
    <ul>
      {statusFilterState.map(({ id, value, title }) => (
        <li key={id}>
          <label>
            <input
              type='checkbox'
              value={value}
              onChange={(e) => handleCheck(id, e)}
            />
            {title}
          </label>
        </li>
      ))}
    </ul>
  );
}
