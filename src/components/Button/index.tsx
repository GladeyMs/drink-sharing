import React, { FC } from 'react'
import ButtonComponent from './styled'

interface iProps {
	className?: string
	onClick?:
		| (React.MouseEventHandler<HTMLAnchorElement> &
				React.MouseEventHandler<HTMLButtonElement>)
		| undefined
	children: any
	color?: string
	disabled?: boolean
	style?: object
	icon?: any
  type?: any
}

const Button: FC<iProps> = ({
	className,
	onClick,
	children,
	color,
	disabled,
	style,
	icon,
	type,
}) => {
	return (
		<ButtonComponent
			className={className}
			onClick={onClick}
			color={color}
			disabled={disabled}
			style={style}
			icon={icon}
			type={type}
		>
			{children}
		</ButtonComponent>
	)
}

export default Button
