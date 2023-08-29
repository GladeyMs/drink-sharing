import styled, { css } from 'styled-components'
import { DatePicker } from 'antd'

const DatePickerComponent = styled(DatePicker)`
	@media only screen and (min-width: 320px) {
		${(props) => {
			switch (props.className) {
				case '':
					return css``
				default:
					return css`
						width: 100%;
					`
			}
		}}
	}

	@media only screen and (min-width: 375px) {
	}

	@media only screen and (min-width: 414px) {
	}

	@media only screen and (min-width: 481px) {
	}

	/* Tablet Size */

	@media only screen and (min-width: 641px) {
		${(props) => {
			switch (props.className) {
				case 'protect-date':
					return css`
						width: 40%;
					`
				default:
					return css`
						width: 100%;
					`
			}
		}}
	}

	@media only screen and (min-width: 961px) {
	}

	/* Labtops Size */

	@media only screen and (min-width: 1024px) {
	}

	@media only screen and (min-width: 1281px) {
	}
`

export default DatePickerComponent
