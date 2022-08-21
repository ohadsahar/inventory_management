import styled from "styled-components";

export const ItemFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 30vw 30vw 30vw 10vw;
  border: 1px solid black;
  border-radius: 8px;
  padding: 12px;
  align-items: center;

  @media (max-width: 767px) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3vh;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  grid-row-gap: 1vh;
  padding-left: 1vw;
  align-items: center;
  grid-column-gap: 1vw;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ApproveEditWrapper = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    left: 5vw;
    bottom: 2vw;
  }
`;
