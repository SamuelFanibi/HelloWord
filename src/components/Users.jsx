import { useEffect, useState } from "react";
import Header from "./header";
import Layout from "./Layout";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(u=>u.json())
          .then(data=>setUsers(data));
    },[]);

    return (
        <>
         <Layout>
          <ul style={{color: "blue",listStyleType: "none", fontSize: "24px"}}>
            {users.map(user=> <li key={user.id}>Name: <strong>{user.name}</strong>, 
                Username: <strong>{user.username}</strong> </li> )}
        </ul>
        </Layout>
        </>
        
    );
}

export default Users;