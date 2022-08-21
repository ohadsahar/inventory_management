import React from "react";
import { AppInputWrapper } from "./Styled";

interface AppInputProps {
  fieldName: string;
  defaultValue: string | number;
  onAction: (fieldName: string, currentValue: number | string) => void;
}

const AppInput = ({ fieldName, defaultValue, onAction }: AppInputProps) => {
  return (
    <AppInputWrapper
      defaultValue={defaultValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onAction(fieldName, e.currentTarget.value)
      }
    />
  );
};

export default AppInput;
