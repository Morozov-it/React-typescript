import React, {FC} from 'react';
import { IUser } from '../types';

//Создаем типы полей для props
interface UserListProps {
    users: IUser[]; //указание что users это массив объектов
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) =>
                <div key={user.id}
                style={{padding: 10, border:'1px solid gray'}}>
                    {user.id}. {user.name} live in {user.address.city} at {user.address.street} street
                </div>
            )}
        </div>)
};

export default UserList;
