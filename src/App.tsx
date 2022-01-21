import React from 'react'
import './App.css';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types';

function App() {
  const users: IUser[] = [
    {id: 1, name: 'Grigory', email: '@.com', address: {street:'Home', city:'Kursk', zipcode:'305000'}}
  ]
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
