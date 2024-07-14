import { Table } from 'flowbite-react'

export default function CartItem({cart, cartItemDeletehandler}) {
  const {id, item} = cart

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item}
            </Table.Cell>
            <Table.Cell>{item}</Table.Cell>
            <Table.Cell>${item}</Table.Cell>
            <Table.Cell>
              <button 
              onClick={() => cartItemDeletehandler(id)} 
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Delete
              </button>
            </Table.Cell>
    </Table.Row>
  )
}
