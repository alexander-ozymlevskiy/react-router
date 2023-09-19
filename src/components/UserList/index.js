import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            {user.name}
            <Link to={`/albums/${user.id}`}>Альбом</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
