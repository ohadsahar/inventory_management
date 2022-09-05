import { Strings } from '@/config/Strings';
import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { DashboardCardTitle, DashboardCardWrapper, IconWrapper, PairWrapper } from './Styled';

interface DashboardCardProps {
  amount: number;
  title: string;
  isIncrease: boolean;
  color: string;
  percentage: number;
  icon: any;
}

const DashboardCard = ({
  amount,
  title,
  icon,
  isIncrease,
  color,
  percentage,
}: DashboardCardProps) => {
  return (
    <DashboardCardWrapper>
      <PairWrapper>
        <IconWrapper color={color}>{icon}</IconWrapper>
        <DashboardCardTitle>{title}</DashboardCardTitle>
      </PairWrapper>
      <PairWrapper>
        <Typography text={amount.toString()} type={TextType.TITLE} />
        <Typography
          type={TextType.HINT}
          text={
            isIncrease
              ? `${Strings.DashboardCardPercentageUp} ${percentage}%`
              : `${Strings.DashboardCardPercentageDown} ${percentage}%`
          }
        />
      </PairWrapper>
      <IconWrapper color={color}>
        {isIncrease ? <TrendingUpIcon fontSize="large" /> : <TrendingDownIcon fontSize="large" />}
      </IconWrapper>
    </DashboardCardWrapper>
  );
};

export default DashboardCard;
