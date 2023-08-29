import React, { FC } from 'react'
import Component from './styled'
import Box from '../Box'

const {
	LoadingComponent,
	Ball,
	ContentLoader,
	ContentBall,
	SpinLoaderComponent,
	SpinOutsideLoaderComponent,
	SpinInsideLoaderComponent,
} = Component

const Loading = () => {
	return (
		<LoadingComponent>
			<Ball />
		</LoadingComponent>
	)
}

const ContentLoading = () => {
	return (
		<ContentLoader>
			<ContentBall />
			<ContentBall />
			<ContentBall />
			<ContentBall />
		</ContentLoader>
	)
}

interface iProps {
	style?: object
}

const SpinLoading: FC<iProps> = ({ style }) => {
	return (
		<LoadingComponent style={style}>
			<SpinLoaderComponent>
				<SpinOutsideLoaderComponent>
					<SpinInsideLoaderComponent />
				</SpinOutsideLoaderComponent>
			</SpinLoaderComponent>
		</LoadingComponent>
	)
}

const Loader = { Loading, ContentLoading, SpinLoading }

export default Loader
