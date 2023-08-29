import styled, { css } from 'styled-components'
import { Input } from 'antd'

const InputText = styled(Input)`
	font-family: anakotmai;
	${(props) => {
		switch (props.className) {
			case 'disabled':
				return css`
					color: red !important;
				`
			case 'editable':
				return css`
					color: blue !important;
				`
			default:
				return css``
		}
	}}
`

const Password = styled(Input.Password)``

const TextArea = styled(Input.TextArea)``

const Component = { InputText, Password, TextArea }

export default Component
