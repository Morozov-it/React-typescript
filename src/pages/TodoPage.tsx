import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from './../types';
import List from './../components/List';
import TodoItem from './../components/TodoItem';

const TodoPage = () => {
    //типизация хука useState, должен вернуться массив типовых объектов
    const [todos, setTodos] = useState<ITodo[]>([]);
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
                renderItem={(item) => <TodoItem todo={item} key={item.id}/>}
            />
        </div>
    )
};

export default TodoPage;
