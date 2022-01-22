import React, { FC } from 'react';
import {NavLink} from 'react-router-dom'

const Main: FC = () => {
    return (
        <div>
            <h1>React Typescript</h1>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
        </div>
    )
};

export default Main;
