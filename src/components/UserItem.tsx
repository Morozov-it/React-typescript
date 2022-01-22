import React, {FC} from 'react';
import { IUser } from '../types';

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser)=>void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div style={{
            padding: 10,
            cursor: 'pointer',
            margin: 5,
            border: '1px solid gray'
        }}
            onClick={()=>onClick(user)}>
            {user.id}. {user.name} live in {user.address.city} at {user.address.street} street
        </div>
    )
};

export default UserItem;
