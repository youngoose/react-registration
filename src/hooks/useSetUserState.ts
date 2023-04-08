import { useEffect } from 'react';

export default function useSetUserState(key: string, value: any) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
}
