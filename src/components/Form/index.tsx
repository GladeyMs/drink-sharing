import dynamic from 'next/dynamic'
import React from 'react'
import { Col, Divider, Row } from 'antd'
import THEME from '../../../public/themes/common'

const Box = dynamic(() => import('../../../src/components/Box'))
const Label = dynamic(() => import('../../../src/components/Label'))
const Button = dynamic(() => import('../../../src/components/Button'))
const Span = dynamic(() => import('../../../src/components/Span'))

interface iProps {
	form: object[]
	onClick?: (e: any) => void
	submitText?: string
}

const Form = ({ form, onClick, submitText }: iProps) => {
	return (
		<Box>
			{form.map((e: any, i: number) => {
				const { title, items, hide } = e.section
				return (
					!hide && (
						<Box key={i}>
							{title.length > 0 && (
								<Divider
									orientation='left'
									plain
									style={{
                    margin: '5px 0',
										borderColor: THEME.COLORS.RED,
										fontSize: '16px',
										fontWeight: 'bold',
									}}
								>
									<Label className='card-title'>{title}</Label>
								</Divider>
							)}
							<Row gutter={16}>
								{items.map((el: any, id: number) => {
									return (
										!el.hide && (
											<Col
												key={id}
												flex={el.flex}
												style={{ marginBottom: '10px' }}
												span={el.span}
												offset={el.offset}
											>
												<Label className='form-label'>
													{el.label} {el.required && <Span color='red'>*</Span>}{' '}
													{el.suffix}
												</Label>
												<Box>{el.item}</Box>
											</Col>
										)
									)
								})}
							</Row>
						</Box>
					)
				)
			})}
			{submitText && (
				<Button className='submit-job' color='red' onClick={onClick}>
					{submitText}
				</Button>
			)}
		</Box>
	)
}

export { Form }
