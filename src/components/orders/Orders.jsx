import { Table } from 'flowbite-react'
import React from 'react'
import useSWR from 'swr'
import { useAuth } from '../../authContext/authProvider'
import Order from './Order'
import { Loader } from '../loader/Loader'

export default function Orders() {
  const {user} = useAuth()
  const {data: orders, error, isLoading} = useSWR(`${import.meta.env.VITE_BASE_URL}/orders/orders/?user=${user?.user}`)

  return (
    isLoading? <Loader/> : 
    <div className="overflow-x-auto">
        <p className='py-4 font-bold text-xl text-center'>
            Your Orders
        </p>
      <Table >
        <Table.Head>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>item</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            orders.map(order => <Order key={order.id} order={order}/>)
          }
        </Table.Body>
      </Table>
    </div>
  )
}
