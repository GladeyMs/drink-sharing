import styled, { css } from 'styled-components'

const BoxComponent = styled.div`
	${(props) => {
		switch (props.className) {
			case 'drinker-order':
				return css`
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
          width: 100%;
				`
			case 'order-item-wrapper':
				return css`
					display: flex;
					column-gap: 10px;
					align-items: flex-end;
					flex-wrap: wrap;
          width: 100%;
				`
			case 'share-order':
				return css`
					margin: 20px auto 0 auto;
					width: 80%;
				`
			default:
				return css``
		}
	}}
`

export default BoxComponent
