import { Table } from "flowbite-react";
import CartItem from "./CartItem";
import useSWR from "swr";
import { Loader } from "../loader/Loader";
import { useAuth } from "../../authContext/authProvider";
import { useState } from "react";
import { calculateTotalPrice } from "../../utils/totalPrice";
import { api } from "../../utils/baseurl";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {user} = useAuth()
  const {data: carts, error, isLoading, mutate} = useSWR(`${import.meta.env.VITE_BASE_URL}/orders/carts/?user=${user?.user}`)
  const navigate = useNavigate()
  

  const cartItemDeletehandler = (id) => {
      api.delete(`${import.meta.env.VITE_BASE_URL}/orders/carts/${id}`,  {headers: {
        'Content-Type': 'application/json'
      }})
      .then(res => {
        mutate()
      })
  }


  const orderHandler = () => {
   const order =  {
      "payment": false,
      "status": "Pending",
      "total_price": 100,
      "user": user.user,
      "item": [1,2]
  }

      api.post("/orders/orders/", order,{headers: {
        'Content-Type': 'application/json'
      }})
      .then(res => {
        navigate('/orders')
      })
      .catch(err => {
        console.log(err);
      })
  }
 

  return (
    isLoading ? <Loader/> : 
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Food name</Table.HeadCell>
          <Table.HeadCell>Discount</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            carts.map(cart => {
              return <CartItem key={cart.id} cart={cart} cartItemDeletehandler={cartItemDeletehandler}/>
            })
          }
          <Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Total Price
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>$totalPrice</Table.Cell>
            <Table.Cell>
              <button onClick={orderHandler} className="font-bold text-blue-500">
                Order Now
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>    
  );
}
