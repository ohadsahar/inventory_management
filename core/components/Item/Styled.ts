import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  border: 1px solid black;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1vh;
  }
`;
