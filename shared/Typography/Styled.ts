import styled from "styled-components";

interface TypographyProps {
  textAlign?: string;
  color?: string;
}

export const HintText = styled.p<TypographyProps>`
  font-size: 18px;
  color: ${(props: TypographyProps) => props.color ?? "black"};
  text-align: ${(props: TypographyProps) => props.textAlign ?? "right"};
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RegularText = styled.p<TypographyProps>`
  letter-spacing: 8px;
  font-size: 24px;
  color: ${(props: TypographyProps) => props.color ?? "black"};
  font-weight: 500;
  text-align: ${(props: TypographyProps) => props.textAlign ?? "right"};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: ${(props: TypographyProps) => props.color ?? "black"};
  text-align: ${(props: TypographyProps) => props.textAlign ?? "right"};
`;
