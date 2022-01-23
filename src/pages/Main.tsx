import React, { FC } from 'react';
import {useNavigate} from 'react-router-dom'

const styles = {
    link: {
        border: '1px solid rgb(53, 53, 236)',
        borderRadius: '5px',
        alignSelf: 'stretch',
        marginTop: 10,
        cursor: 'pointer'
    }
}

const Main: FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            width: 968,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h1>React Typescript</h1>
            <div style={styles.link}
                onClick={()=>navigate('/users')}>
                USERS
            </div>
            <div style={styles.link}
                onClick={()=>navigate('/todos')}>
                TODOS
            </div>
        </div>
    )
};

export default Main;
