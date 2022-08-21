import styled from "styled-components";

export const ItemActionsWrapper = styled.div`
  display: flex;
  grid-column-gap: 1vw;
  align-items: center;
  @media (max-width: 767px) {
    grid-column-gap: 3vw;
  }
  @media (max-width: 767px) {
    position: absolute;
    left: 5vw;
    bottom: 2vw;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 50%;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;
