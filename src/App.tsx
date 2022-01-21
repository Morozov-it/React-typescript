import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types';

function App() {

  
  //типизация хука useState, должен вернуться массив типовых объектов
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
  }, [])

  //функция получения данных с сервера
  async function fetchUsers() {
    try {
        //контролируем что в массиве объектов от сервера есть типовые поля как в IUser
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        console.log(response.data)
      } catch (e) {
        alert(e)
      }
    };
  //пример создания массива с типовыми объектам, при создании сразу указываются и проверяются требуемые поля
  // const users: IUser[] = [
  //   { id: 1, name: 'Grigory', email: '@.com', address: { street: 'Home', city: 'Kursk', zipcode: '305000' } }];
  

  return (
    <div className='app'>
      <h1>React Typescript</h1>
      <Card
        width='200px'
        height='200px'
        variant={CardVariant.outlined}
        onClick={(num:number)=>console.log('click', num)}>
        <button>button</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
