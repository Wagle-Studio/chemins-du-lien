'use client'

import './style.scss'
import { Controller, Control, Path, FieldValues } from 'react-hook-form'

export interface InputTextProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  placeholder?: string
  type?: 'text' | 'password' | 'email'
  inputProps: { autoComplete: string }
}

export function InputText<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  inputProps,
}: InputTextProps<T>) {
  return (
    <div className="input_text_field">
      <label htmlFor={name} className="input_text_field__label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              id={name}
              className="input_text_field__input"
              type={type}
              placeholder={placeholder}
              {...inputProps}
            />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  )
}
