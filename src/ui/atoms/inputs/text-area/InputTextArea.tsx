import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import clsx from 'clsx'

export interface InputTextareaProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  placeholder?: string
  rows?: number
  className?: string
}

export function InputTextarea<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  rows = 7,
  className,
}: InputTextareaProps<T>) {
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
            <textarea
              {...field}
              id={name}
              rows={rows}
              className="input_text_field__input"
              placeholder={placeholder}
              style={{ resize: 'none' }}
            />
            {fieldState.error && <p className="form_message--error">{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  )
}
