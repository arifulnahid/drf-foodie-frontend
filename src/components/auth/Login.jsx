import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useAuth } from "../../authContext/authProvider";

export function Login() {
    const [input, setInput] = useState({})
    const {loginAction, user, loading,error, setLoding} = useAuth()


    const handleChange = (e) => {
        const {name, value} = e.target
        if(loading) setLoding(false)
        setInput({
            ...input,
            [name]:value,
        })
    }
    
    const LoginHander = (e) => {
        e.preventDefault()
        const data = loginAction('/account/login/', input)
    }
  return (
    <div>
        <h1 className="text-center">Login Your Account</h1>
        <div className="lg:flex min-h-96 items-center justify-center">
        <div className="lg:w-1/3">
            <form onSubmit={LoginHander} className="flex flex-col gap-4">
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="username" value="Username" />
                </div>
                <TextInput onChange={handleChange} name="username" id="username" type="text" placeholder="" required />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput 
                onChange={handleChange} 
                name="password"  
                id="password1" 
                type="password" 
                required 
                color={error?.error ? 'failure': ''} 
                helperText={
                    <>
                      {error?.error ? <>{error?.error}</>: <></>}
                    </>
                  }
                />
                </div>
                <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
                </div>
                {user?.error ? <p className="mt-2 text-sm text-red-600 dark:text-red-500">{user.error}</p> : ''}
                {
                    loading ? <Button disabled>Loading...</Button>: <Button type="submit">Login</Button>
                }
            </form>
        </div>
    </div>
    </div>
  );
}
