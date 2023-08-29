import React, { FC } from 'react'
import DatePickerComponent from './styled'
import Label from '../Label'
import Span from '../Span'
import Box from '../Box'

interface iProps {
	className?: string
	onChange?(e: any): void
	defaultValue?: any
	format?: string
	placeholder?: string
	disabled?: boolean
	value?: any
	picker?: any
	label?: string
	color?: string
	required?: boolean
	error?: string
	allowClear?: boolean
}

const DatePicker: FC<iProps> = ({
	className,
	onChange,
	defaultValue,
	format,
	placeholder,
	disabled,
	value,
	picker,
	label,
	color,
	required,
	error,
	allowClear,
}) => {
	return (
		<>
			{label && (
				<div style={{ marginTop: '10px' }}>
					<Label color={color}>
						{label} {required && <Span color='red'>*</Span>}
					</Label>
				</div>
			)}
			<DatePickerComponent
				className={className}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
				format={format}
				disabled={disabled}
				value={value}
				picker={picker}
				allowClear={allowClear}
			/>
			{error && (
				<Box>
					<Span color='red' style={{ fontSize: '14px' }}>
						{error}
					</Span>
				</Box>
			)}
		</>
	)
}

export default DatePicker
