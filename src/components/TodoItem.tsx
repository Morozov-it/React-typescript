import React, {FC} from 'react';
import { ITodo } from '../types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{
            padding: 10,
            margin: 5,
            border: todo.completed?'1px solid green':'1px solid red'
        }}>
            <input type='checkbox' readOnly checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    )
};

export default TodoItem;
