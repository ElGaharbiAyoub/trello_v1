
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import api from "./api/users"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';


function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = async (user)=> {
    const request = {
      id: uuidv4(),
      ...user
    }
    const response = await api.post("/users", request)
    setUsers([...users, response.data])
  }

  const deleteUserHandler = async (id)=> {
    await api.delete(`/users/${id}`);
    const newUsersList = users.filter((user)=>{
      return user.id !== id
    });
    setUsers(newUsersList);
  }

  return (
    <div>
      <NavComponent/>
    </div>
  )
}

export default App
