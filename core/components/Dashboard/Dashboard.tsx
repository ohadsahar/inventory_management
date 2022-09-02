import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CategoryIcon from '@mui/icons-material/Category';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardCard from './DashboardCard/DashboardCard';
import { DashboardWrapper } from './Styled';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardCard
        amount="10"
        title="מוצרים"
        icon={<ProductionQuantityLimitsIcon fontSize="large" />}
        isIncrease={true}
        color="#a4dfcd"
      />
      <DashboardCard amount="132" title="סה״כ מלאי" icon={<CategoryIcon fontSize="large" />} isIncrease={false} color="#623cea" />
      <DashboardCard
        amount="20"
        title="כמות עדכונים שבועי"
        icon={<SyncAltIcon fontSize="large" />}
        isIncrease={true}
        color="#a4dbfe"
      />
      <DashboardCard
        amount="5"
        title="כמות אזהרות"
        icon={<WarningAmberIcon fontSize="large" />}
        isIncrease={false}
        color="#ff9f0b"
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
