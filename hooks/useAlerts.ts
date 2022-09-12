import { alertTimeout } from '@/config/Constants';
import { AlertType } from '@/config/Enums/AlertType';
import { Strings } from '@/config/Strings';
import { useEffect, useRef } from 'react';
import { Alert, removeAlert, selectAllAlerts } from 'redux/AlertSlice/AlertSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useAlerts = () => {
  const alerts: Alert[] = useAppSelector(selectAllAlerts);
  const dispatch = useAppDispatch();
  const toast = useRef<any>(null);

  useEffect(() => {
    if (alerts) {
      for (let index = 0; index < alerts.length; index++) {
        if (toast.current) {
          toast.current.show({
            severity: alerts[index].type,
            summary: alerts[index].message,
            detail:
              alerts[index].type === AlertType.SUCCESS
                ? Strings.MessageGlobalSuccess
                : Strings.MessageGlobalError,
            life: alertTimeout,
          });
          dispatch(removeAlert(alerts[index]));
        }
      }
    }
  }, [alerts, dispatch]);

  return { alerts, toast };
};
