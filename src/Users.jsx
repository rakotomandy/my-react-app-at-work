import React from 'react';

function Users({ data }) {
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
