import Login from './pages/Login';
import Signup from './pages/Signup';

import { useState,useEffect } from "react"
import api from "./api/users"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Footer from './components/Footer';


import Home from "./pages/Home";
import Creation from './pages/creation';
<<<<<<< Updated upstream
import About from './pages/About';
import Contact from './pages/Contact';
=======
import Layout from './components/Layout';
>>>>>>> Stashed changes


function App() {

  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [userAuth, setUserAuth] = useState("");

  // const deleteUserHandler = async (id)=> {
  //   await api.delete(`/users/${id}`);
  //   const newUsersList = users.filter((user)=>{
  //     return user.id !== id
  //   });
  //   setUsers(newUsersList);
  // }
  // Function Get
  
  const getUsers = async () => {
    const response = await api.get("/users");
    console.log(response.data)
    setUsers([...response.data]);
};
  useEffect(() => {
    getUsers();
}, []);


  
  return (
    <div style={{height: "100vh"}}>


    <Router>
      <NavComponent isAuth={isAuth} userAuth={userAuth}/>
      
    <Layout>
      <Routes>
      <Route path="/" element={<Home users={users} setUsers= {setUsers}/>} />
      <Route path="/login" element={<Login users={users} setUserAuth={setUserAuth} setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<Signup users={users} setUsers= {setUsers} />} />
      <Route path="/create" element={<Creation users={users}/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />}/>
      </Routes>


     

    </Layout>
    <Footer/>
    </Router>
    </div>

  )
}

export default App
