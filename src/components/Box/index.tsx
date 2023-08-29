import React, { FC } from 'react'
import BoxComponent from './styled'

interface iProps {
	children?: any
	className?: string
	style?: any
	onClick?: () => void
}

const Box: FC<iProps> = ({ children, className, style, onClick }) => {
	return (
		<BoxComponent className={className} style={style} onClick={onClick}>
			{children}
		</BoxComponent>
	)
}

export default Box
