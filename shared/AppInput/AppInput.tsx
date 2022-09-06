import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React from 'react';
import { Controller } from 'react-hook-form';

interface AppInputProps {
  fieldName: string;
  requiredMsg?: string;
  placeholder?: string;
  type: string;
  label: string;
  autoFocus?: boolean;
  control: any;
  errors: any;
}

const AppInput = ({
  fieldName,
  requiredMsg,
  placeholder,
  type,
  label,
  control,
  errors,
  autoFocus,
}: AppInputProps) => {
  return (
    <div className="field pt-4">
      <span className="p-float-label">
        <Controller
          name={fieldName}
          control={control}
          rules={{ required: requiredMsg ?? '' }}
          render={({ field, fieldState }) => (
            <InputText
              type={type}
              placeholder={placeholder}
              id={field.name}
              {...field}
              autoFocus={autoFocus ?? false}
              className={classNames({ 'p-invalid': fieldState.error })}
            />
          )}
        />
        <label htmlFor={fieldName} className={classNames({ 'p-error': errors[fieldName] })}>
          {label}
        </label>
      </span>
      {errors[fieldName] && <small className="p-error">{errors[fieldName].message}</small>}
    </div>
  );
};

export default AppInput;
