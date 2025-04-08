import './style.scss'
import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import clsx from 'clsx'
import { ArrowDownIcon } from '@/ui/icons/ArrowDownIcon'

export interface InputSelectProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  labelDisplay?: boolean
  inputProps?: { autoComplete: string }
  className?: string
  options: any[] // TODO: update typing
  optionsValue: string
  optionsLabel: string
  defaultOption: { value: any; label: string }
}

export function InputSelect<T extends FieldValues>({
  name,
  control,
  label,
  labelDisplay = true,
  inputProps,
  className,
  options,
  optionsValue,
  optionsLabel,
  defaultOption,
}: InputSelectProps<T>) {
  return (
    <div className={clsx('input_select_field', className)}>
      <label
        htmlFor={name}
        className={clsx('input_select_field__label', {
          'input_select_field__label--hidden': !labelDisplay,
        })}
      >
        {label}
      </label>
      <div className="input_select_field__wrapper">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <select
                {...field}
                id={name}
                className="input_select_field__wrapper__input"
                {...inputProps}
              >
                <option value={defaultOption.value}>{defaultOption.label}</option>
                {options.map((option) => (
                  <option key={option.id} value={option[optionsValue]}>
                    {option[optionsLabel]}
                  </option>
                ))}
              </select>
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </>
          )}
        />
        <ArrowDownIcon className="input_select_field__wrapper__icon" />
      </div>
    </div>
  )
}
