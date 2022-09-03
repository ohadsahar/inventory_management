import styled from 'styled-components';

export const DashboardCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 2vh;
  grid-column-gap: 1vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: auto;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
