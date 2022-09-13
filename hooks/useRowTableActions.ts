import { useCallback, useState } from 'react';

export const useRowTableActions = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const disableCurrentRow = useCallback(() => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  }, []);

  return { disabled, disableCurrentRow };
};
