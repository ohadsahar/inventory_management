import React from "react";
import { AppInputWrapper } from "./Styled";

interface AppInputProps {
  register: any;
  fieldName: string;
}

const AppInput = ({ register, fieldName }: AppInputProps) => {
  return <AppInputWrapper {...register(fieldName)} />;
};

export default AppInput;
