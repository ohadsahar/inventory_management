import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { DashboardCardTitle, DashboardCardWrapper, IconWrapper, PairWrapper } from './Styled';

interface DashboardCardProps {
  amount: string;
  title: string;
  isIncrease: boolean;
  icon: any;
  color: string;
}

const DashboardCard = ({ amount, title, icon, isIncrease, color }: DashboardCardProps) => {
  return (
    <DashboardCardWrapper>
      <PairWrapper>
        <IconWrapper color={color}>{icon}</IconWrapper>
        <DashboardCardTitle>{title}</DashboardCardTitle>
      </PairWrapper>
      <PairWrapper>
        <Typography text={amount.toString()} type={TextType.TITLE} />
        <Typography type={TextType.HINT} text={isIncrease ? 'עלייה של 0.75 אחוז' : 'ירידה ב0.5 אחוז'} />
      </PairWrapper>
      <IconWrapper color={color}>
        {isIncrease ? <TrendingUpIcon fontSize="large" /> : <TrendingDownIcon fontSize="large" />}
      </IconWrapper>
    </DashboardCardWrapper>
  );
};

export default DashboardCard;
