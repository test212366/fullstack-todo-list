import React, {useState, useContext} from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const Login = () => {
    let [form, setForm] = useState({
        email: '', password: ''
    })
    const {login} = useContext(AuthContext)

    const handlerChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const loginHandler = async e => {
        e.preventDefault()
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(responce => {
                    login(responce.data.token, responce.data.userid)
                })
        }catch (e) {
            console.log(e)
        }
    }


    return (
        <form onSubmit={e => loginHandler(e)}>
            <p>this a login</p>
            <input type="text" placeholder='name' onChange={e => handlerChange(e)}  name="email"/>
            <input type="text" placeholder='pass' onChange={e => handlerChange(e)} name="password"/>
            <button type='submit'>sub</button>
        </form>
    );
};

export default Login;