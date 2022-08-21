import { useCallback } from 'react';

export const useSearch = () => {
  const handleSearchValue = useCallback((value: string) => {
    // Should go to async function
  }, []);

  return { handleSearchValue };
};
