import { useEffect, useState } from "react";
import "../styles/home.css";
import api from "../api/users";

import CarteComponent from "../components/CarteComponent";
const Home = ({users, setUsers}) => {

  const [tasks, setTasks] = useState([]);

    // Function Get
    console.log(users)
    useEffect(() => {
    const getTasks = async () => {
      const response = await api.get("/tasks");
      setTasks([...response.data]);
  };
    getTasks();
  }, []);
  console.log(tasks)
  

  return (
    <div
    //  className="homepage" 
     >
          {tasks.map((task)=>(
            <CarteComponent task={task} users={users}/>
            // <h1>jjjjj</h1>
          ))}

    </div>
  )
}

export default Home