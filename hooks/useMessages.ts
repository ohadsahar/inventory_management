import { useRef } from 'react';

export const useMessages = () => {
  const toastRef = useRef<any>(null);

  const handleMessage = (value: string, detail: string, type: string) => {
    toastRef.current.show({
      severity: type,
      summary: value,
      detail: detail,
    });
  };
  return { toastRef, handleMessage };
};
