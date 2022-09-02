import styled from 'styled-components';

interface DashboardColors {
  color: string;
}

export const DashboardCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row-gap: 3vh;
  width: 240px;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const DashboardCardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const PairWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-gap: 8px;
`;

export const IconWrapper = styled.div<DashboardColors>`
  color: ${(props: DashboardColors) => props.color ?? 'black'};
`;
