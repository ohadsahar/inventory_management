import styled from 'styled-components';

interface TypographyProps {
  textAlign?: string;
  color?: string;
}

export const TitleText = styled.p<TypographyProps>`
  font-size: 24px;
  color: ${(props: TypographyProps) => props.color ?? 'black'};
  font-weight: bold;
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'right'};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RegularText = styled.p<TypographyProps>`
  font-size: 24px;
  color: ${(props: TypographyProps) => props.color ?? 'black'};
  font-weight: 500;
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'right'};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HintText = styled.p<TypographyProps>`
  color: ${(props: TypographyProps | any) => props.color ?? props.theme.colors.hint};
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'right'};
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: ${(props: TypographyProps) => props.color ?? 'black'};
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'right'};
`;

export const DashboardCardAmountTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const DashboardCardHint = styled.p``;
