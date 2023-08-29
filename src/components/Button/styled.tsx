import styled, { css } from 'styled-components'
import { Button } from 'antd'
import THEME from '../../../public/themes/common'

const ButtonComponent = styled(Button)`
	${(props) => {
		switch (props.className) {
			case 'login-btn':
				return css`
					width: 100%;
				`
			default:
				return css``
		}
	}}
	${(props) => {
		switch (props.color) {
			case 'red':
				return css`
					border: 1px solid transparent;
					border-radius: 3px;
					background-color: ${THEME.COLORS.RED_2};
					color: ${THEME.COLORS.WHITE};
					&:active {
						border: 1px solid ${THEME.COLORS.RED_2} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.RED_2} !important;
					}
					&:hover {
						border: 1px solid ${THEME.COLORS.RED_2} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.RED_2} !important;
					}
					&:focus {
						border: 1px solid ${THEME.COLORS.RED_2} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.RED_2} !important;
					}
				`
			case 'orange':
				return css`
					border: 1px solid transparent;
					border-radius: 3px;
					background-color: ${THEME.COLORS.ORANGE};
					color: ${THEME.COLORS.WHITE};
					&:active {
						border: 1px solid ${THEME.COLORS.ORANGE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.ORANGE} !important;
					}
					&:hover {
						border: 1px solid ${THEME.COLORS.ORANGE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.ORANGE} !important;
					}
					&:focus {
						border: 1px solid ${THEME.COLORS.ORANGE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.ORANGE} !important;
					}
				`
			case 'blue':
				return css`
					border: 1px solid transparent;
					border-radius: 3px;
					background-color: ${THEME.COLORS.BLUE};
					color: ${THEME.COLORS.WHITE};
					&:active {
						border: 1px solid ${THEME.COLORS.BLUE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.RED_2} !important;
					}
					&:hover {
						border: 1px solid ${THEME.COLORS.BLUE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.BLUE} !important;
					}
					&:focus {
						border: 1px solid ${THEME.COLORS.BLUE} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.BLUE} !important;
					}
				`
			case 'green':
				return css`
					border: 1px solid transparent;
					border-radius: 3px;
					background-color: ${THEME.COLORS.GREEN5};
					color: ${THEME.COLORS.WHITE};
					&:active {
						border: 1px solid ${THEME.COLORS.GREEN5} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.GREEN5} !important;
					}
					&:hover {
						border: 1px solid ${THEME.COLORS.GREEN5} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.GREEN5} !important;
					}
					&:focus {
						border: 1px solid ${THEME.COLORS.GREEN5} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.GREEN5} !important;
					}
				`
			case 'yellow':
				return css`
					border: 1px solid transparent;
					border-radius: 3px;
					background-color: ${THEME.COLORS.YELLOW};
					color: ${THEME.COLORS.WHITE};
					&:active {
						border: 1px solid ${THEME.COLORS.YELLOW} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.YELLOW} !important;
					}
					&:hover {
						border: 1px solid ${THEME.COLORS.YELLOW} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.YELLOW} !important;
					}
					&:focus {
						border: 1px solid ${THEME.COLORS.YELLOW} !important;
						background-color: ${THEME.COLORS.WHITE} !important;
						color: ${THEME.COLORS.YELLOW} !important;
					}
				`
			default:
				return
		}
	}}

	/* Mobile Size */
	@media only screen and (min-width: 320px) {
		font-size: 14px;
		padding: 3px 20px;
	}

	@media only screen and (min-width: 414px) {
		font-size: 16px;
		padding: 3px 20px;
	}

	@media only screen and (min-width: 481px) {
	}

	/* Tablet Size */

	@media only screen and (min-width: 641px) {
	}

	@media only screen and (min-width: 961px) {
	}

	/* Labtops Size */

	@media only screen and (min-width: 1024px) {
	}

	@media only screen and (min-width: 1281px) {
		${(props) => {
			switch (props.className) {
				case 'submit-job':
					return css`
						width: 100%;
						margin-top: 15px;
					`
				default:
					return css``
			}
		}}
	}
`

// export const MenuBurgerButton = styled.button`
// 	margin-left: 30px;
// 	left: 2rem;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	width: 2rem;
// 	height: 1.5rem;
// 	background: transparent;
// 	border: none;
// 	cursor: pointer;
// 	padding: 0;
// 	z-index: 20;
// 	&:focus {
// 		outline: none;
// 	}

// 	div {
// 		width: 2rem;
// 		height: 0.2rem;
// 		background: ${THEME.COLORS.RED_2};
// 		border-radius: 10px;
// 		transition: all 0.3s linear;
// 		position: relative;
// 		transform-origin: 1px;

// 		:first-child {
// 			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
// 			width: ${({ open }) => (open ? '1.5rem' : '2rem')};
// 		}

// 		:nth-child(2) {
// 			opacity: ${({ open }) => (open ? '0' : '1')};
// 			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
// 		}

// 		:nth-child(3) {
// 			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
// 			width: ${({ open }) => (open ? '1.5rem' : '2rem')};
// 		}
// 	}
// `

export default ButtonComponent
