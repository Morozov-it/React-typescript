import React, {FC} from 'react';
import { IUser } from '../types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 10, border:'1px solid gray'}}>
            {user.id}. {user.name} live in {user.address.city} at {user.address.street} street
        </div>
    )
};

export default UserItem;
