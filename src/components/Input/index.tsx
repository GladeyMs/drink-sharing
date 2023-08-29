import React, { FC, forwardRef } from 'react'
import Component from './styled'
import Box from '../Box'
import Span from '../Span'
import Label from '../Label'

interface iProps {
	required?: boolean
	name?: string
	className?: string
	label?: string
	defaultValue?: string
	value?: string | number | undefined
	onChange?(e: any): void
	onBlur?(e: any): void
	placeholder?: string
	type?: string
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
	style?: object
	disabled?: boolean
	ref?: any
	bordered?: boolean
	maxLength?: number
	autoFocus?: boolean
	error?: string
	minLength?: number
	color?: string
	autoSize?: boolean | object
}

const Input: FC<iProps> = forwardRef(
	(
		{
			required,
			name,
			className,
			defaultValue,
			value,
			onChange,
			onKeyDown,
			onBlur,
			placeholder,
			type,
			style,
			disabled,
			bordered,
			maxLength,
			autoFocus,
			error,
			label,
			color,
		},
		ref: any
	) => {
		return (
			<Box>
				{label && (
					<div>
						<Label color={color}>
							{label} {required && <Span color='red'>*</Span>}
						</Label>
					</div>
				)}
				<Component.InputText
					type={type}
					required={required}
					name={name}
					onChange={onChange}
					onKeyDown={onKeyDown}
					onBlur={onBlur}
					placeholder={placeholder}
					className={className}
					defaultValue={defaultValue}
					value={value}
					style={style}
					disabled={disabled}
					ref={ref}
					bordered={bordered}
					maxLength={maxLength}
					autoFocus={autoFocus}
				/>
				{!value && error && (
					<Box>
						<Span color='red' style={{ fontSize: '14px' }}>
							{error}
						</Span>
					</Box>
				)}
			</Box>
		)
	}
)

const Password: FC<iProps> = ({
	required,
	name,
	className,
	defaultValue,
	value,
	onChange,
	onKeyDown,
	placeholder,
	type,
	style,
	disabled,
	ref,
	error,
	minLength,
}) => {
	return (
		<>
			<Component.Password
				type={type}
				required={required}
				name={name}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				className={className}
				defaultValue={defaultValue}
				value={value}
				style={style}
				disabled={disabled}
				ref={ref}
				minLength={minLength}
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

const TextArea: FC<iProps> = ({
	required,
	name,
	className,
	defaultValue,
	value,
	onChange,
	placeholder,
	style,
	disabled,
	ref,
	error,
	maxLength,
	label,
	color,
	autoSize,
}) => {
	return (
		<>
			{label && (
				<div>
					<Label color={color}>
						{label} {required && <Span color='red'>*</Span>}
					</Label>
				</div>
			)}
			<Component.TextArea
				required={required}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				className={className}
				defaultValue={defaultValue}
				value={value}
				style={style}
				disabled={disabled}
				ref={ref}
				maxLength={maxLength}
				autoSize={autoSize}
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

Input.displayName = 'Input'

const InputComponent = { Text: Input, Password, TextArea }

export default InputComponent
