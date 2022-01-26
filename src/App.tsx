import './App.css';
import EventsExample from './components/EventsExample';
import { Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import Main from './pages/Main';
import UserItemPage from './pages/UserItemPage';
import TodoItemPage from './pages/TodoItemPage';

function App() { 
  return (
    <div style={{maxWidth: '980px', margin: '0 auto'}}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
        <Route path='/events' element={<EventsExample />} />
        <Route path='/*' element={<div>Error path</div>} />
      </Routes>
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