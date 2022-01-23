import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from '../types';
import List from '../components/List';
import TodoItem from '../components/TodoItem';
import {NavLink, useNavigate} from 'react-router-dom'

const TodosPage = () => {
    //типизация хука useState, должен вернуться массив типовых объектов
    const [todos, setTodos] = useState<ITodo[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodos();
    }, [])

    async function fetchTodos() {
        try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data);
        } catch (e) {
        alert(e)
        }
    }
    return (
        <div>
            <h2>Todos</h2>
            <List items={todos}
                renderItem={(todo: ITodo) => <TodoItem
                    onClick={(todo)=>navigate(`/todos/${todo.id}`)}
                    todo={todo}
                    key={todo.id} />}
            />
            <div>
                <NavLink to={'/'}>BACK</NavLink>
            </div>
        </div>
    )
};

export default TodosPage;
