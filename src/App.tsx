import React from 'react'
import './App.css';
import EventsExample from './components/EventsExample';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import Main from './pages/Main';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/todos' element={<TodoPage />} />
        <Route path='/events' element={<EventsExample />} />
        <Route path='/*' element={<div>Error path</div>} />
      </Routes>
    </BrowserRouter>
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