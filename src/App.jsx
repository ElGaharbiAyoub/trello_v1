
import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import api from "./api/users"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CarteComponent from './components/CarteComponent';


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

  // Function Get
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get("/users");
      console.log(response.data)
      setUsers([...response.data]);
  };
    getUsers();
}, []);
console.log(users)


  
  return (
    <div style={{height: "100vh"}}>
    <Router>
      <NavComponent/>
      <Routes>
      <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
