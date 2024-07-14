import { Table } from 'flowbite-react'
import React from 'react'

export default function Order({order}) {
    const date = new Date(order.created_at)

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {order.id}
            </Table.Cell>
            <Table.Cell>{...order.item}</Table.Cell>
            <Table.Cell>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</Table.Cell>
            <Table.Cell>${order.total_price}</Table.Cell>
            <Table.Cell>
              {order.status}
            </Table.Cell>
          </Table.Row>
  )
}
