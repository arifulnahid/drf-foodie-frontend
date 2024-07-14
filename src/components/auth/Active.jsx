import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr';

export default function Active() {
    const {uid, token} = useParams()
    const {data, error, loading} =  useSWR(`${import.meta.env.VITE_BASE_URL}/account/active/${uid}/${token}`)
    const navigate = useNavigate()
   
    if (data) navigate('/login') 
  
        return (
    <div>Active</div>
  )
}

