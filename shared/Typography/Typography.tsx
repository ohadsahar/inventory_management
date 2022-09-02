import { TextType } from '@/config/TextType';
import React from 'react';
import { HintText, InputLabel, RegularText, TitleText } from './Styled';

interface TypographyProps {
  text: string;
  type: TextType;
  textAlign?: string;
  color?: string;
}

const Typography = ({ text, type, color, textAlign }: TypographyProps) => {
  return (
    <>
      {type === TextType.TITLE && <TitleText>{text}</TitleText>}
      {type === TextType.REGULAR && (
        <RegularText textAlign={textAlign} color={color}>
          {text}
        </RegularText>
      )}
      {type === TextType.LABEL && <InputLabel>{text}</InputLabel>}
      {type === TextType.HINT && (
        <HintText textAlign={textAlign} color={color}>
          {text}
        </HintText>
      )}
    </>
  );
};

export default Typography;
