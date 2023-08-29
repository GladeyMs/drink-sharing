import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { Checkbox, List, Modal, Select, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { CloseOutlined } from '@ant-design/icons'
import _ from 'lodash'
import Input from '../src/components/Input'
import Label from '../src/components/Label'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

const Box = dynamic(() => import('../src/components/Box'))
const Button = dynamic(() => import('../src/components/Button'))

interface OrderItemProps {
	key: number
	item: string
	price: string | number
	quantity: string | number
	drinkers: string[]
}

const Page = () => {
	const [item, setItem] = useState<string>('')
	const [drinker, setDrinker] = useState<string>('')
	const [quantity, setQuantity] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [orderList, setOrderList] = useState<OrderItemProps[]>([])
	const [drinkerList, setDrinkerList] = useState<string[]>([])

	const handleClickAddItem = () => {
		const list = orderList.concat({
			key: orderList.length + 1,
			item,
			quantity,
			price,
			drinkers: [],
		})
		setOrderList(list)
		setItem('')
		setQuantity('')
		setPrice('')
	}

	const handleClickAddDrinker = () => {
		const list = drinkerList.concat(drinker)
		setDrinkerList(list)
		setDrinker('')
	}

	const orderItemColumns: ColumnsType<OrderItemProps> = [
		{
			title: 'เมนู',
			dataIndex: 'item',
			key: 'item',
			align: 'center',
		},
		{
			title: 'จำนวน',
			dataIndex: 'quantity',
			key: 'quantity',
			align: 'center',
		},
		{
			title: 'ราคา',
			dataIndex: 'price',
			key: 'price',
			align: 'center',
		},
		{
			title: 'รวมราคา',
			dataIndex: 'sumPrice',
			key: 'sumPrice',
			align: 'center',
			render: (text, record) => {
				const price: number = +record.price / +record.quantity
				return <Label>{price.toLocaleString()}</Label>
			},
		},
		{
			title: 'คนที่กิน/ดื่ม',
			dataIndex: 'drinkers',
			key: 'drinkers',
			align: 'center',
			render: (text, record, index) => {
				const options = drinkerList.map((e) => ({ label: e, value: e }))
				const handleChangeSelect = (drinkers: string[]) => {
					orderList[index].drinkers = []
					orderList[index].drinkers.push(...drinkers)
					const orders: OrderItemProps[] = orderList.map((e) => ({
						...e,
						drinkers: [...new Set(e.drinkers)],
					}))
					setOrderList(orders)
				}

				const handleChangeAll = (e: CheckboxChangeEvent) => {
					if (e.target.checked) {
						orderList[index].drinkers = []
						orderList[index].drinkers.push(...drinkerList)
						const orders: OrderItemProps[] = orderList.map((e) => ({
							...e,
							drinkers: [...new Set(e.drinkers)],
						}))
						setOrderList(orders)
					} else {
						const orders: OrderItemProps[] = orderList.map((e) => ({
							...e,
							drinkers: [],
						}))
						setOrderList(orders)
					}
				}
				return (
					<>
						<Select
							style={{ width: '200px' }}
							onChange={handleChangeSelect}
							options={options}
							mode='multiple'
							allowClear
						/>
						<Checkbox onChange={handleChangeAll}>ทุกคน</Checkbox>
					</>
				)
			},
		},
		{
			title: 'ลบ',
			dataIndex: 'remove',
			key: 'remove',
			align: 'center',
			render: (text, record) => {
				return (
					<CloseOutlined
						onClick={() => {
							const list = orderList.filter((e) => e.item !== record.item)
							setOrderList(list)
						}}
					/>
				)
			},
		},
	]

	return (
		<Box className='share-order'>
			<Box className='drinker-order'>
				<Box className='order-item'>
					<Box className='order-item-wrapper'>
						<Input.Text
							label='รายการ'
							name='item'
							value={item}
							onChange={(e) => setItem(e.currentTarget.value)}
						/>
						<Input.Text
							label='จำนวน'
							name='quantity'
							value={quantity}
							onChange={(e) => setQuantity(e.currentTarget.value)}
						/>
						<Input.Text
							label='ราคา'
							name='price'
							value={price}
							onChange={(e) => setPrice(e.currentTarget.value)}
						/>
						<Button onClick={handleClickAddItem}>Add Item</Button>
					</Box>
					<Box>
						<Table
							style={{ marginTop: '20px' }}
							columns={orderItemColumns}
							dataSource={orderList}
							pagination={false}
							size='small'
							footer={() => {
								const price: number = orderList.reduce(
									(acc, curr) => +curr.price * +curr.quantity + acc,
									0
								)
								return (
									<>
										<Label>{`รวมทั้งหมด ${price.toLocaleString()} บาท`}</Label>
									</>
								)
							}}
						/>
					</Box>
				</Box>
				<Box className='order-item'>
					<Box className='order-item-wrapper'>
						<Input.Text
							label='คนที่กิน/ดื่ม'
							name='drinker'
							value={drinker}
							onChange={(e) => setDrinker(e.currentTarget.value)}
						/>
						<Button onClick={handleClickAddDrinker}>Add Drinker</Button>
					</Box>
					<Box>
						<List
							style={{ marginTop: '20px' }}
							dataSource={drinkerList}
							renderItem={(item) => (
								<List.Item>
									<CloseOutlined
										onClick={() => {
											const list = drinkerList.filter((e) => e !== item)
											setDrinkerList(list)
										}}
									/>{' '}
									{item}
								</List.Item>
							)}
						/>
					</Box>
				</Box>
			</Box>
			<Box>{_renderExpenseSummaryTable(orderList)}</Box>
		</Box>
	)
}

interface SummaryProps {
	name: string
	summaryPrice: number
}

const _renderExpenseSummaryTable = (orderList: OrderItemProps[]) => {
	const [groupData, setGroupData] = useState<object[]>([])
	const result: SummaryProps[] = useMemo(() => {
		const data = orderList.map((e) => {
			return e.drinkers.map((name) => ({
				name,
				price: +((+e.quantity * +e.price) / e.drinkers.length).toFixed(2),
				items: e.item,
			}))
		})

		const groupedData: any = {}

		data.flat().forEach((item) => {
			const { name, items, price } = item
			if (!groupedData[name]) {
				groupedData[name] = [{ items, price }]
			} else {
				groupedData[name].push({ items, price })
			}
		})

		setGroupData(groupedData)
		const summary = data.flat().reduce((result: any, item: any, i) => {
			if (!result[item.name]) {
				result[item.name] = {
					key: i + 1,
					name: item.name,
					summaryPrice: +item.price,
				}
			} else {
				result[item.name].summaryPrice += item.price
			}
			return result
		}, {})

		return Object.values(summary)
	}, [orderList])

	const columns: ColumnsType<SummaryProps> = [
		{
			title: 'ลำดับ',
			dataIndex: 'key',
			key: 'key',
			align: 'center',
		},
		{
			title: 'ชื่อ',
			dataIndex: 'name',
			key: 'name',
			align: 'center',
			render: (text, record, index) => {
				const handleClickShowItems = () => {
					const items: any = Object.values(groupData)[index]
					Modal.info({
						title: `บิลของ ${text}`,
						content: (
							<Table
								columns={[
									{ title: 'ลำดับ', dataIndex: 'key', key: 'itemskey' },
									{ title: 'รายการ', dataIndex: 'items', key: 'items' },
									{ title: 'ราคา', dataIndex: 'price', key: 'price' },
								]}
								dataSource={items.map((e: any, i: number) => ({
									key: i + 1,
									...e,
								}))}
								pagination={false}
								size='small'
								footer={() => {
									const price: number = items.reduce(
										(acc: number, curr: any) => +curr.price + acc,
										0
									)
									return <Label>{`รวม ${price.toLocaleString()} บาท`}</Label>
								}}
							/>
						),
					})
				}
				return (
					<Label cursor='pointer' onClick={handleClickShowItems}>
						{text}
					</Label>
				)
			},
		},
		{
			title: 'ราคารวม',
			dataIndex: 'summaryPrice',
			key: 'summaryPrice',
			align: 'center',
			render: (text) => {
				return <Label>{text.toFixed(2)}</Label>
			},
		},
	]

	return (
		<>
			<Table
				style={{ marginTop: '50px', width: '50%' }}
				columns={columns}
				dataSource={result}
				pagination={false}
				size='small'
			/>
		</>
	)
}

export default Page
