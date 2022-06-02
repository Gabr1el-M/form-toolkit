import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {dispatch(login({name: "Gabriel", age: 20, email: "gabrielmartins.lima0612@gmail.com"}))}}>Login</button>
            <button onClick={() => {dispatch(logout())}}>LOGOUT</button>
        </div>
    );
};

export default Login;