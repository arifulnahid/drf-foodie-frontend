import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { api } from "../../utils/baseurl";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext/authProvider";

export function Signup() {
    const [input, setInput] = useState({})
    const [error, setError] = useState({})
    const {loginAction, loading, setLoding} = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        delete error[name]
        setInput({
            ...input,
            [name]:value,
        })
    }
    
    const LoginHander = (e) => {
        e.preventDefault()
        setLoding(true)
        api.post('/account/register/', {...input}, {headers: {
            'Content-Type': 'application/json'
          }})
          .then(res => {
            setError(res.data)
            setLoding(false)
            navigate('/login')
          })
          .catch(err => {
            setLoding(false)
            setError({...error, ...err.response.data});
          })
    }
  return (
    <div>
        <h1 className="text-center">Signup Your Account</h1>
    <div className="lg:flex min-h-96 items-center justify-center">
        <div className="lg:w-1/2">
            <form onSubmit={LoginHander} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Username" />
                    </div>
                    <TextInput 
                    onChange={handleChange} 
                    name="username" 
                    id="username" 
                    type="text" 
                    placeholder=""
                    color={error?.username ? 'failure': ''} 
                    required 
                    helperText={
                        <>
                          {error?.username ? error?.username[0]: <></>}
                        </>
                      }
                    />
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex-auto">
                        <div className="mb-2 block">
                            <Label htmlFor="first_name" value="First Name" />
                        </div>
                        <TextInput 
                        onChange={handleChange} 
                        name="first_name" 
                        id="first_name" 
                        type="text" 
                        placeholder="Jon" 
                        required />
                    </div>
                    <div  className="flex-auto">
                        <div className="mb-2 block">
                            <Label htmlFor="last_name" value="Last Name" />
                        </div>
                        <TextInput onChange={handleChange} name="last_name" id="last_name" type="text" placeholder="Doe" required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput 
                    onChange={handleChange} 
                    name="email" 
                    id="email1" 
                    type="email" 
                    placeholder=""
                    required 
                    color={error?.email ? 'failure': ''} 
                    helperText={
                        <>
                          {error?.email ? error?.email[0]: <></>}
                        </>
                      }
                     />
                </div>
                <div className="flex gap-2">
                <div className="flex-auto">
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput 
                    onChange={handleChange} 
                    name="password" 
                    id="password1" 
                    type="password" 
                    required 
                    helperText={
                        <span className="text-red-500">
                          {error?.password ? error?.password[0]: <></>}
                        </span>
                      }
                    />
                </div>
                <div className="flex-auto">
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput 
                    onChange={handleChange} 
                    name="confirm_password" 
                    id="password2" 
                    type="password" 
                    color={error?.password ? 'failure': ''} 
                    required 
                    />
                </div>
                </div>
                <Button type="submit" disabled={loading}>{loading ? "Loading...": "Signup"}</Button>
            </form>
        </div>
    </div>
    </div>
  );
}
