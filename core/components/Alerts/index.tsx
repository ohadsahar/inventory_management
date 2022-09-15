import { Toast } from 'primereact/toast';
import { useAlerts } from '@/hooks/useAlerts';

const Alerts = () => {
  const { toast } = useAlerts();
  return <Toast position="top-center" ref={toast}></Toast>;
};

export default Alerts;
