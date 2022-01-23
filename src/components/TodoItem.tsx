import React, {FC} from 'react';
import { ITodo } from '../types';

interface TodoItemProps {
    todo: ITodo
    onClick: (todo: ITodo)=>void
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {
    return (
        <div style={{
            padding: 10,
            margin: 5,
            cursor: 'pointer',
            border: todo.completed?'1px solid green':'1px solid red'
        }}
            onClick={()=>onClick(todo)}>
            <input type='checkbox' readOnly checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    )
};

export default TodoItem;
