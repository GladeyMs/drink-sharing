import React, { FC } from 'react'
import { SpanComponent } from './styled'

interface iProps {
	children?: any
	color?: string
	onClick?:
		| (React.MouseEventHandler<HTMLAnchorElement> &
				React.MouseEventHandler<HTMLButtonElement>)
		| undefined
	className?: string
	style?: object
}

const Span: FC<iProps> = ({ children, color, onClick, style }) => {
	return (
		<SpanComponent color={color} onClick={onClick} style={style}>
			{children}
		</SpanComponent>
	)
}

export default Span
