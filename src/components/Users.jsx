import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(u=>u.json())
          .then(data=>setUsers(data));
    },[]);

    return (
        <ul style={{color: "blue",listStyleType: "none", fontSize: "24px"}}>
            {users.map(user=> <li key={user.id}>Name: <strong>{user.name}</strong>, 
                Username: <strong>{user.username}</strong> </li> )}
        </ul>
    );
}

export default Users;