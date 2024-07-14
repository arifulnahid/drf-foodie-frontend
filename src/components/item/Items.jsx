import React, { useState } from 'react';
import Item from './Item';
import { useLoaderData, useNavigate} from 'react-router-dom';
import useSWR from 'swr';
import { Loader } from '../loader/Loader';
import { api } from '../../utils/baseurl';
import { useAuth } from '../../authContext/authProvider';

export default function Items() {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = useLoaderData()
  const {data: items, error} = useSWR(`${import.meta.env.VITE_BASE_URL}/items/v1/food/?category=${activeCategory}`)
  const {user} = useAuth()
  const navigate = useNavigate()

  const categotyHandler = (category) => {
    setActiveCategory(category.id)
  }

  const addCartHandler = (itemid) => {
      user?.token ? 
      api.post(`/orders/carts/`, {'user':user.user, 'item': itemid}, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.status == 201) navigate('/cart')
      }).catch(err => {
      })
      :
      navigate('/login')
  }

  return (
    <>
    <div className='text-center my-4'>
      {
        categories.map(category => <button 
          key={category.id} 
          onClick={()=>categotyHandler(category)} 
          type="button" 
          className={`${category.id == activeCategory ? 'bg-gray-100 text-blue-700': 'bg-white text-gray-900'} py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-non rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
          >
            {category.name}
          </button>)
      }
    </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-2'>
      {
       items ?  (items.map(item => <Item key={item.id} item={item} addCartHandler={addCartHandler}/>)):<Loader/>
      }
    </div>
    </>
  )
}
