import styled, { css } from 'styled-components'
import { Select } from 'antd'

const SelectComponent = styled(Select)`
	/* Mobile Size */
	@media only screen and (min-width: 320px) {
		${(props) => {
			switch (props.className) {
				case 'recommend-plan':
					return css`
						width: 110px;
					`
				default:
					return css`
						width: 100%;
					`
			}
		}}
	}

	@media only screen and (min-width: 414px) {
		${(props) => {
			switch (props.className) {
				case 'select-row':
					return css`
						width: 100px;
					`
				default:
					return css``
			}
		}}
	}

	@media only screen and (min-width: 481px) {
	}

	@media only screen and (min-width: 481px) {
	}

	/* Tablet Size */

	@media only screen and (min-width: 641px) {
	}

	@media only screen and (min-width: 961px) {
	}

	/* Labtops Size */

	@media only screen and (min-width: 1025px) {
	}

	@media only screen and (min-width: 1281px) {
	}
`

export default SelectComponent