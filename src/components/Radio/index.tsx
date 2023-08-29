import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { RadioGroupComponent, RadioBox } from './styled'

const Box = dynamic(() => import('../../../src/components/Box'))
const Label = dynamic(() => import('../../../src/components/Label'))
const Span = dynamic(() => import('../../../src/components/Span'))

interface iProps {
	className?: string
	onChange?(e: any): void
	name: string
	value?: string
	label?: string
	color?: string
	options: []
	required?: boolean
	error?: string
	style?: object
	lbClassName?: string
}

const RadioGroup: FC<iProps> = ({
	className,
	onChange,
	name,
	value,
	label,
	color,
	options,
	required,
	error,
	style,
}) => {
	return (
		<RadioBox>
			<div style={{ marginTop: '10px' }}>
				<Label color={color}>
					{label} {required && <Span color='red'>*</Span>}
				</Label>
			</div>
			<RadioGroupComponent
				className={className}
				onChange={onChange}
				name={name}
				value={value}
				options={options}
				style={style}
			/>
			{!value && error && (
				<Box>
					<Span color='red'>{error}</Span>
				</Box>
			)}
		</RadioBox>
	)
}

const RadioGroupBtn: FC<iProps> = ({
	className,
	onChange,
	name,
	value,
	label,
	color,
	options,
	style,
	lbClassName,
}) => {
	return (
		<RadioBox>
			{label && (
				<div style={{ marginTop: '10px' }}>
					<Label className={lbClassName} color={color}>
						{label}
					</Label>
				</div>
			)}
			<RadioGroupComponent
				className={className}
				onChange={onChange}
				name={name}
				value={value}
				options={options}
				optionType='button'
				style={style}
			/>
		</RadioBox>
	)
}

const Radio = { Group: RadioGroup, GroupBtn: RadioGroupBtn }

export default Radio
