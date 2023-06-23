import Button from 'react-bootstrap/Button';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import api from "./api/users"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';


import Home from "./pages/Home";
import Creation from './pages/creation';
import CarteComponent from './components/CarteComponent';


function App() {

  const [users, setUsers] = useState([]);

  const deleteUserHandler = async (id)=> {
    await api.delete(`/users/${id}`);
    const newUsersList = users.filter((user)=>{
      return user.id !== id
    });
    setUsers(newUsersList);
  }
  // Function Get
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get("/users");
      console.log(response.data)
      setUsers([...response.data]);
  };
    getUsers();
}, []);


  
  return (
    <div style={{height: "100vh"}}>
     {/* {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <Button variant="danger" onClick={() => deleteUserHandler(user.id)}>
            Delete
          </Button>
        </div>
      ))} */}




    <Router>
      <NavComponent/>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login users={users} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Creation users={users}/>} />
      </Routes>
     
    </Router>

    
    </div>

  )
}

export default App
