import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITodo } from '../types';

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | undefined>(undefined)
    const { id } = useParams() as { id: string }
    let navigate = useNavigate()
    useEffect(() => {
        fetchTodo(id)
    }, [id])
    async function fetchTodo(id: string) {
        try {
            const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
    <>
        <div style={{
            border: todo?.completed?'2px solid green':'2px solid red'}}>
            <h2>Page of todo titled {todo?.title}</h2>
            <div>Id: {todo?.id}</div>
            <div>Completed: {todo?.completed ? 'Yes!' : 'No!'}</div>
            
        </div>
        <button onClick={()=>navigate('/todos')}>back</button>
    </>
    )
};

export default TodoItemPage;
