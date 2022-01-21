import React, {FC} from 'react';
import { IUser } from '../types';
import UserItem from './UserItem';

//Создаем типы полей для props
interface UserListProps {
    users: IUser[]; //указание что users это массив объектов
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>)
};

export default UserList;
