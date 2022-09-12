import { useAlerts } from '@/hooks/useAlerts';
import { Toast } from 'primereact/toast';

const Alerts = () => {
  const { toast } = useAlerts();

  return <Toast position="top-center" ref={toast}></Toast>;
};

export default Alerts;
