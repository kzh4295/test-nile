import { useReducer } from 'react';

const StatusFilterArray = [
  { id: 0, title: '최초 판매중', checked: false },
  { id: 1, title: '판매중', checked: false },
  { id: 2, title: '제안 가능', checked: false },
  { id: 3, title: '옥션 종료', checked: false },
  { id: 4, title: '판매 예정', checked: false },
];

interface StateType {
  id: number;
  title: string;
  checked: boolean;
}

interface Action {
  type: string;
  id: number;
}

const reducer = (statusState: StateType[], action: Action) => {
  switch (action.type) {
    case 'toggle':
      return statusState.map((item: StateType) => {
        if (item.id === action.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    default:
      return statusState;
  }
};

function StatusFilter() {
  const [statusState, dispatch] = useReducer(reducer, StatusFilterArray);
  console.log(statusState);
  return (
    <div>
      {statusState.map((ele) => (
        <div key={ele.id}>
          <input
            type='checkbox'
            name={ele.title}
            checked={ele.checked}
            onChange={() => dispatch({ type: 'toggle', id: ele.id })}
          />
          {ele.title}
        </div>
      ))}
    </div>
  );
}

export default StatusFilter;
