import { useCallback, useState } from 'react';

export const useLocalStorage = ({ key }: { key: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const savePersistData = useCallback(
    async ({ data: newData }) => {
      try {
        setLoading(true);
        await Promise.resolve();
        localStorage.setItem(key, JSON.stringify(newData));
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    },
    [key],
  );

  const getPersistData = useCallback(async () => {
    try {
      setLoading(true);
      const element: any = Promise.resolve().then(() => {
        return localStorage.getItem(key);
      });
      setData(JSON.parse(element));
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [key]);

  return { getPersistData, savePersistData, data, loading, error };
};
