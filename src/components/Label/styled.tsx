import styled, { css } from 'styled-components'
import THEME from '../../../public/themes/common'

interface iProps {
	children: any
	className?: string
	onClick?: Function
	color?: string
	cursor?: string
	style?: string
	bold?: boolean
	fontWeight?: string
	underline?: boolean
	fontSize?: number
}

const LabelComponent = styled.label`
	cursor: ${(props: iProps) => props.cursor};
	font-family: ${(props) => props.bold && 'anakotmai-bold'};
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => `${props.fontSize}px`};
	border-bottom: ${(props) => props.underline && '1px solid'};
	&:hover {
		color: ${(props: iProps) =>
			props.color === 'red'
				? `${THEME.COLORS.FADE_RED}`
				: props.color === 'blue'
				? `${THEME.COLORS.TEXT_BLUE}`
				: ``};
	}

	@media only screen and (min-width: 320px) {
		${(props) => {
			switch (props.className) {
				case 'card-title':
					return css`
						font-size: 16px !important;
						font-weight: bold;
						color: ${THEME.COLORS.RED_2};
					`
				default:
					return css``
			}
		}}
	}

	${(props) => {
		switch (props.color) {
			case 'red':
				return css`
					color: ${THEME.COLORS.RED_2};
				`
			case 'red-text':
				return css`
					color: ${THEME.COLORS.RED_2};
				`
			case 'white':
				return css`
					color: ${THEME.COLORS.WHITE};
				`
			case 'text-black':
				return css`
					color: ${THEME.COLORS.TEXT_BLACK};
				`
			case 'text-gray':
				return css`
					color: ${THEME.COLORS.GRAY2};
				`
			case 'blue':
				return css`
					color: ${THEME.COLORS.BLUE};
				`
			case 'orange':
				return css`
					color: ${THEME.COLORS.ORANGE};
				`
			case 'green':
				return css`
					color: ${THEME.COLORS.GREEN5};
				`
			case props.color:
				return css`
					color: ${props.color};
				`
			default:
				return css``
		}
	}}
`

export default LabelComponent
