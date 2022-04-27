import React from 'react';
import useAuth from '../Component/hooks/useAuth';


const Login = () => {
   

    const { signInUsingGoogle, handleEmailChange,
        handlePasswordChange,
        registerNewUser,
        email,
        password, setEmail, setPassword } = useAuth()
    const handleLogin = () => {
        registerNewUser(email, password)
        setEmail("")
        setPassword("")
       

    }
    
    return (
        <div className="">
            <h1>Please Login</h1>
            <input onBlur={handleEmailChange} className="p-2 m-2" type="email" placeholder="Enter Email" />
            <br />
            <input onBlur={handlePasswordChange} className="p-2 m-2" type="password" placeholder="Enter Password" />
            <br />
            <input onClick={handleLogin} type="submit" />
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning p-2 m-2">Google Sign In</button>
        </div>
    );
};

export default Login;