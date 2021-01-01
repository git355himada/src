import React, { useEffect, useState } from 'react';
import {users} from '../models/Users'
import axios from 'axios';

function User() {
    const [users, setUsers] = useState<users[]>([]);
    console.log([users, setUsers]);

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const response = await axios.get('/api/user');
        setUsers(response.data.users)
    }

    return (
        <div>
            <h1>Userページ</h1>
            <ul>
                {users.map((user) => <li key="{user.id}">{user.name}</li>)}
            </ul>
        </div>
    );
}

export default User;