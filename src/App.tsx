import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types';

function App() {
  //типизация хука useState, должен вернуться массив типовых объектов
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  //функции получения данных с сервера
  async function fetchUsers() {
    try {
      //контролируем что в массиве объектов от сервера есть типовые поля как в IUser
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      //console.log(response.data)
    } catch (e) {
      alert(e)
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      alert(e)
    }
  }
  
  return (
    <div className='app'>
      <h1>React Typescript</h1>
      <EventsExample />
      <h2>Users</h2>
      <List items={users}
        renderItem={(item) => <UserItem user={item} key={item.id}/>}
      />
      <h2>Todos</h2>
      <List items={todos}
        renderItem={(item) => <TodoItem todo={item} key={item.id}/>}
      />
    </div>
  );
}

export default App;

/* <Card
        width='200px'
        height='200px'
        variant={CardVariant.outlined}
        onClick={(num:number)=>console.log('click', num)}>
        <button>button</button>
      </Card> */


  //пример создания массива с типовыми объектам, при создании сразу указываются и проверяются требуемые поля
  // const users: IUser[] = [
  //   { id: 1, name: 'Grigory', email: '@.com', address: { street: 'Home', city: 'Kursk', zipcode: '305000' } }];