import { useRef } from 'react';

export const useMessages = (toastRef: any) => {
  const handleMessage = (value: string, detail: string, type: string) => {
    toastRef.current.show({
      severity: type,
      summary: value,
      detail: detail,
    });
  };
  return { toastRef, handleMessage };
};
