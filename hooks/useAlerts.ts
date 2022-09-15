import { useEffect, useRef } from 'react';
import { alertTimeout, infoAlertTime } from '@/config/Constants';
import { AlertType } from '@/config/Enums/AlertType';
import { Strings } from '@/config/Strings';
import { Alert, removeAlert, selectAllAlerts } from 'redux/AlertSlice/AlertSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useAlerts = () => {
  const alerts: Alert[] = useAppSelector(selectAllAlerts);
  const dispatch = useAppDispatch();
  const toast = useRef<any>(null);

  const handleErrorTypeMessage = (type: AlertType) => {
    return type === AlertType.SUCCESS
      ? Strings.MessageGlobalSuccess
      : type === AlertType.ERROR
      ? Strings.MessageGlobalError
      : Strings.MessageGlobalInfo;
  };

  useEffect(() => {
    if (alerts) {
      for (let index = 0; index < alerts.length; index++) {
        const currentAlert = alerts[index];
        if (toast.current) {
          toast.current.show({
            severity: currentAlert.type,
            summary: currentAlert.message,
            detail: handleErrorTypeMessage(currentAlert.type),
            life: currentAlert.type === AlertType.INFO ? infoAlertTime : alertTimeout,
          });
          {
            dispatch(removeAlert(currentAlert));
          }
        }
      }
    }
  }, [alerts, dispatch]);

  return { alerts, toast };
};
