import { useState } from 'react';
import Head from 'next/head';

import NFTView from '@/view/NFTView';

const TAB_INFORMS = [
  { idx: 0, name: 'NFT', content: <NFTView /> },
  { idx: 1, name: '컬렉션 정보', content: '컬렉션 정보의 내용' },
  { idx: 2, name: '액티비티', content: '액티비티의 내용' },
];

export default function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        {TAB_INFORMS.map(({ idx, name }) => {
          return (
            <li
              style={{ outline: '1px solid red', padding: '10px' }}
              key={idx}
              onClick={() => {
                setTabIndex(idx);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <div>{TAB_INFORMS[tabIndex].content}</div>
    </>
  );
}
