import React, {useState} from 'react';

import axios from "axios";


const Registration = () => {
    let [form, setForm] = useState({
        email: '', password: ''
    })
    const handlerChange = e => {
        setForm({...form, [e.target.name]: e.target.value})

    }
    const registerHandler = async e => {
        e.preventDefault()
        try {
            await axios.post('/api/auth/registration', {...form}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).then(responce => console.log(responce))


        }catch (e) {
            console.log(e)
        }
    }


    return (
        <form onSubmit={(e) => registerHandler(e)}>
            <input type="text" onChange={e => handlerChange(e)} placeholder='email' name='email'/>
            <input type="text" onChange={e => handlerChange(e)} placeholder='pass' name='password'/>
            <button type='submit'>sub</button>
        </form>
    );
};

export default Registration;