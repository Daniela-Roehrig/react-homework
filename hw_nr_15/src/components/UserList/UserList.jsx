import { useState, useCallback, useMemo } from 'react';
import { userList } from '../userList';

import styles from './UserList.module.css';

const UserList = () => {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((filterText) => {
    return userList.filter((user) =>
      user.name.includes(filterText)
    );
  }, []);

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>User not found</p>
      ) : (
        <ul className={styles.ul}>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;