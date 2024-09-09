import { useEffect, useState } from 'react';
import { User } from '../types';
import { fetchData } from '../lib/fetch-data';
import { Pagination } from './pagination';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData().then((data) => setUsers(data));
  }, []);

  return (
    <div className='container'>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            <img src={user.avatar} alt={user.username} />
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{new Date(user.birthdate).toLocaleDateString()}</p>
            <p>{new Date(user.registeredAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
