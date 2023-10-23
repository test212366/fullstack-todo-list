import React, {useCallback, useContext, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const Main = () => {
    let [text, setText] = useState('')
    const {userId} = useContext(AuthContext)
    const [todos, setTodos] = useState([])
    const getTodo = useCallback(async () => {
        try {
            await axios.get('api/todo', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then(responce => setTodos(responce.data))
        } catch (e) {
            console.log(e)
        }
    }, [userId])
    getTodo()

    const handlerCreated = useCallback(async e => {
        e.preventDefault()
        try {
            await axios.post('/api/todo/add', {
            text, userId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(responce => {
                    setTodos([...todos], responce.data)
                    setText('')
                })
        }catch (e) {
            console.log(e)
        }
    }, [text, userId, todos])
    return (
        <div>
            <form onSubmit={(e) => handlerCreated(e)}>
                <input type="text"
                       value={text}
                       onChange={e=> setText(text = e.target.value)}
                       placeholder='add post'/>
                <button type='submit'>submit</button>
            </form>
            <div className="content">
                {
                    todos.map((todo, i) => {
                        return (
                            <div key={i}>{todo.text}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Main;