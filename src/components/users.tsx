import { useEffect, useState } from 'react';
import { User } from '../types';
import { fetchData } from '../lib/fetch-data';
import { Pagination } from './pagination';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchData(currentPage.toString());
        setUsers(data.users);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
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
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};
