import styled from 'styled-components'
import { Checkbox } from 'antd'
import THEME from '../../../public/themes/common'

const CheckboxComponent = styled(Checkbox)`
	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: ${THEME.COLORS.RED_2};
	}
	.ant-checkbox-wrapper:hover .ant-checkbox-inner,
	.ant-checkbox:hover .ant-checkbox-inner,
	.ant-checkbox-input:focus + .ant-checkbox-inner {
		border-color: ${THEME.COLORS.RED_2};
	}
	.ant-checkbox-wrapper .ant-checkbox-inner,
	.ant-checkbox .ant-checkbox-inner,
	.ant-checkbox-input + .ant-checkbox-inner {
		border-color: ${THEME.COLORS.RED_2};
	}
	.ant-checkbox-checked::after {
		border-color: ${THEME.COLORS.RED_2};
	}
`

export default CheckboxComponent
