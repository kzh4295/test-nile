import { Dispatch, ReactNode, SetStateAction } from 'react';

type Tab = {
  idx: number;
  name: string;
  content: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  setTabIndex: Dispatch<SetStateAction<number>>;
}

export default function Tabs({ tabs, setTabIndex }: TabsProps) {
  return (
    <ul style={{ display: 'flex', listStyleType: 'none' }}>
      {tabs.map(({ idx, name }) => (
        <li
          style={{ outline: '1px solid red', padding: '10px' }}
          key={idx}
          onClick={() => {
            setTabIndex(idx);
          }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
