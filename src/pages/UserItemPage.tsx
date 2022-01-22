import React, { useState, useEffect, FC } from 'react';
import { IUser } from './../types';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom'


const UserItemPage: FC = () => {
    //уточняем какие поля вернет хук
    const { id } = useParams() as { id: string };
    let navigate = useNavigate();

    //должен вернуться пустой или типовой объект
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        fetchUser(id);
    }, [id])

    //функции получения данных с сервера
    async function fetchUser(id: string) {
        try {
        //контролируем что в массиве объектов от сервера есть типовые поля как в IUser
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
        //console.log(response.data)
        } catch (e) {
        alert(e)
        }
    }
    return (
        <div>
            <h2>Page of user named {user?.name}</h2>
            <div>Email: {user?.email}</div>
            <div>Address: {user?.address.city} {user?.address.street}</div>
            <button onClick={()=>{navigate('/users')}}>Users</button>
        </div>
    )
};

export default UserItemPage;
