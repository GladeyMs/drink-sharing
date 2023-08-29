import React, { FC, ReactNode } from 'react'
import Box from '../Box'
import Label from '../Label'
import Span from '../Span'
import SelectComponent from './styled'

interface iProps {
	required?: boolean
	name?: string
	className?: string
	label?: string
	defaultValue?: string
	value?: string | number | null
	onChange?(v: any, e: any, obj: any): void
	placeholder?: string
	style?: object
	disabled?: boolean
	options: { value: string; label: string; disabled?: boolean }[]
	bordered?: boolean
	showArrow?: boolean
	size?: number
	color?: string
	error?: string
	mode?: string
	dropdownRender?: (originNode: ReactNode) => ReactNode
}

const Select: FC<iProps> = ({
	className,
	onChange,
	name,
	value,
	bordered,
	disabled,
	showArrow,
	defaultValue,
	options,
	style,
	size,
	label,
	placeholder,
	color,
	required,
	error,
	mode,
	dropdownRender,
}: any) => {
	return (
		<>
			{label && (
				<div style={{ marginTop: '10px' }}>
					<Label color={color}>
						{label} {required && <Span color='red'>*</Span>}
					</Label>
				</div>
			)}
			<SelectComponent
				className={className}
				onChange={(v, e) => {
					onChange(v, e, {
						name,
						value: v,
					})
				}}
				value={value}
				bordered={bordered}
				disabled={disabled}
				showArrow={showArrow}
				showSearch
				defaultValue={defaultValue}
				placeholder={placeholder}
				style={style}
				size={size}
				mode={mode}
				dropdownRender={dropdownRender}
				filterOption={(input, option) => (option?.label ?? '').includes(input)}
				options={options}
			/>
			{!value && error && (
				<Box>
					<Span color='red'>{error}</Span>
				</Box>
			)}
		</>
	)
}

export default Select
