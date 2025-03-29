import './style.scss'
import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import clsx from 'clsx'

export interface InputTextProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  placeholder?: string
  type?: 'text' | 'password' | 'email'
  inputProps: { autoComplete: string }
  className?: string
}

export function InputText<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  inputProps,
  className,
}: InputTextProps<T>) {
  return (
    <div className={clsx('input_text_field', className)}>
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
