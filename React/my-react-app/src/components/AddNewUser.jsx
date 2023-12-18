import React, { useState } from 'react';

const AddNewUser = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName || `User ${users.length + 1}`, // Use entered name or default
    };

    setUsers([...users, newUser]);
    setNewUserName(''); // Clear input after adding user
  };

  return (
    <div>
      <h1>User Cards</h1>
      <div>
        <label>
          User Name:
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </label>
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        {users.map(user => (
          <div key={user.id} className="user-card">
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewUser;
