import { useReducer } from 'react';

const STATUS_FILTERS: StatusFilters = [
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
type StatusFilters = StatusFilter[];

interface StatusAction {
  type: string;
  id: number;
}

const reducer = (statusFilterStates: StatusFilter[], action: StatusAction) => {
  switch (action.type) {
    case 'toggle':
      return statusFilterStates.map((statusFilterState: StatusFilter) => {
        if (statusFilterState.id === action.id) {
          return {
            ...statusFilterState,
          };
        }
        return statusFilterState;
      });
    default:
      return statusFilterStates;
  }
};

function StatusFilter() {
  const [statusFilterStates, dispatch] = useReducer(reducer, STATUS_FILTERS);
  console.log(statusFilterStates);
  return (
    <ul>
      {statusFilterStates.map((statusFilterState) => (
        <li key={statusFilterState.id}>
          <label>
            <input
              type='checkbox'
              value={statusFilterState.value}
              onChange={() =>
                dispatch({ type: 'toggle', id: statusFilterState.id })
              }
            />
            {statusFilterState.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default StatusFilter;
