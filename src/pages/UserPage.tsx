import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { IUser } from './../types';
import UserItem from './../components/UserItem';
import List from './../components/List';
import {NavLink, useNavigate} from 'react-router-dom'

const UserPage: FC = () => {
    //типизация хука useState, должен вернуться массив типовых объектов
    const [users, setUsers] = useState<IUser[]>([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
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
    return (
        <div>
            <h2>Users</h2>
            <List items={users}
                renderItem={(user: IUser) => <UserItem
                    onClick={(user)=>navigate(`/users/${user.id}`)}
                    user={user}
                    key={user.id} />}
            />
            <div>
                <NavLink to={'/'}>BACK</NavLink>
            </div>
        </div>
    )
};

export default UserPage;
