import { createContext, useContext, useState } from "react";
import { api } from "../utils/baseurl";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const setAuthData = (key, data) => {
        setUser(data)
        localStorage.setItem(key, JSON.stringify(data))
        navigate("/")
    }

    const loginAction = async (url, data) => {
        setLoding(true)
        setError(null)
        try{
            const res = await api.post(url, data, {headers: {
                'Content-Type': 'application/json'
              }})
            if(res.data?.token){
                setAuthData('user', res.data)
                setLoding(false)
            }else {
                setError(res.data)
            }
            return res.data
        }catch (err){
            setLoding(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        navigate("/login")
    }

    return <AuthContext.Provider  value={{loginAction,logout,loading,error, setLoding, user}}>{children}</AuthContext.Provider >
};


export default AuthProvider;

export const useAuth  = () => {
    return useContext(AuthContext)
}

