import styled, { keyframes } from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'
import THEME from '../../../public/themes'

const LoadingComponent = styled.div`
	position: absolute;
	/* display: flex;
	justify-content: center;
	align-items: center; */
	/* background-color: rgba(0, 0, 0, 0.4); */
	/* width: 100%;
	height: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	z-index: 1000;
`

const SpinComponent = styled(LoadingOutlined)`
	font-size: 30px;
	color: ${THEME.COLORS.RED};
`

const LoadingWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100px;
	justify-content: space-between;
`

const rotate = keyframes`
  0%, 100% {
    left: 45px;
  }
  25% {
    transform: scale(.3);
  }
  50% {
    left: 0;
  }
  75% {
    transform: scale(1);
  }
`

const Ball = styled.span`
	width: 50px;
	height: 50px;
	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		animation: ${rotate} 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
	}
	&::before {
		background-color: ${THEME.COLORS.RED_2};
	}
	&::after {
		background-color: ${THEME.COLORS.BLUE};
		animation-delay: 0.5s;
	}
`

const ContentLoader = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	/*change these sizes to fit into your project*/
	width: 50px;
	height: 50px;
`

const spin = keyframes`
  0% {
    transform:translate(0) scale(0);
  }
  25% {
    transform:translate(200%) scale(1.5);
  }
  50% {
    transform:translate(200%, 200%) scale(0);
  }
  75% {
    transform:translate(0, 200%) scale(1.5);
  }
  100% {
    transform:translate(0) scale(0);
  }
`

const ContentBall = styled.div`
	border: 0;
	margin: 0;
	width: 40%;
	height: 40%;
	position: absolute;
	border-radius: 50%;
	animation: ${spin} 2s ease infinite;
	transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	&:nth-child(1) {
		background: #216658;
		animation-delay: -1.5s;
	}
	&:nth-child(2) {
		background: #ffd960;
		animation-delay: -1s;
	}
	&:nth-child(3) {
		background: #d7415d;
		animation-delay: -0.5s;
	}
	&:nth-child(4) {
		background: #216ad6;
	}
`

const spinRotate = keyframes`
  0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`

const SpinLoaderComponent = styled.div`
	width: 100px;
	height: 100px;
`

const SpinOutsideLoaderComponent = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border: 10px solid transparent;
	border-top-color: #e46d5a;
	border-bottom-color: #ffffff;
	border-radius: 50%;
	animation: ${spinRotate} 5s linear infinite;
`

const SpinInsideLoaderComponent = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border: 10px solid transparent;
	border-top-color: #f8a075;
	border-bottom-color: #f6cb64;
	border-radius: 50%;
	animation: ${spinRotate} 5s linear infinite;
	animation-duration: 2.5s;
`

const Component = {
	LoadingComponent,
	SpinComponent,
	LoadingWrapper,
	Ball,
	ContentLoader,
	ContentBall,
	SpinLoaderComponent,
	SpinOutsideLoaderComponent,
	SpinInsideLoaderComponent,
}

export default Component
