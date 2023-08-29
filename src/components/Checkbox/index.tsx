import React, { FC } from 'react'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import CheckboxComponent from './styled'
import Box from '../Box'
import Span from '../Span'

interface iProps {
	className?: string
	onChange?(e: CheckboxChangeEvent): void
	children: any
	checked?: boolean
	error?: string
}

const Checkbox: FC<iProps> = ({
	className,
	onChange,
	children,
	checked,
	error,
}) => {
	return (
		<>
			<CheckboxComponent
				checked={checked}
				className={className}
				onChange={onChange}
			>
				{children}
			</CheckboxComponent>
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

export default Checkbox
