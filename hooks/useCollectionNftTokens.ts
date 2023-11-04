import { getCollectionNftTokens } from '@/services/collection/collection';
import { useEffect, useState } from 'react';

export interface Nft {
  name: string;
}

export interface Option {
  slug: string;
  fromPrice: number;
  toPrice: number;
  'orderStatuses[]': string[];
  page: number;
  sort: string;
}

export function useCollectionNftTokens(options: Partial<Option>) {
  const [data, setData] = useState<Nft[]>([]);

  useEffect(() => {
    async function fetchCollectionNftTokens() {
      try {
        const items = await getCollectionNftTokens(options);

        setData(items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCollectionNftTokens();
  }, [options]);

  return { data };
}
