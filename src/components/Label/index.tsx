import React, { FC } from 'react'
import LabelComponent from './styled'

interface iProps {
	children: any
	className?: string
	onClick?: (React.MouseEventHandler<HTMLLabelElement> & Function) | undefined
	color?: string
	cursor?: string
	style?: string
	bold?: boolean
	fontWeight?: string
	underline?: boolean
	fontSize?: number
}

const Label: FC<iProps> = ({
	children,
	className,
	color,
	cursor,
	style,
	onClick,
	bold,
	fontWeight,
	underline,
	fontSize,
}) => {
	return (
		<LabelComponent
			className={className}
			color={color}
			onClick={onClick}
			cursor={cursor}
			style={style}
			bold={bold}
			fontWeight={fontWeight}
			underline={underline}
			fontSize={fontSize}
		>
			{children}
		</LabelComponent>
	)
}

export default Label
