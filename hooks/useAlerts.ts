import { useEffect, useRef } from 'react';
import { shallowEqual } from 'react-redux';
import { alertTimeout, infoAlertTime } from '@/config/constans';
import { Strings } from '@/config/strings';
import { AlertType } from '@/shared/Enums/AlertType';
import { Alert, removeAlert, selectAllAlerts } from 'redux/AlertSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useAlerts = () => {
  const alerts: Alert[] = useAppSelector(selectAllAlerts, shallowEqual);
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
