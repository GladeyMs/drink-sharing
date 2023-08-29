import React, { FC } from 'react'
import ContainerComponent from './styled'

interface iProps {
	children?: any
}

const Container: FC<iProps> = ({ children }) => {
	return <ContainerComponent>{children}</ContainerComponent>
}

export default Container
