import { useEffect, useState } from "react";
import "../styles/home.css";
import api from "../api/users";

import CarteComponent from "../components/CarteComponent";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await api.get("/tasks");
      setTasks(response.data);
    };

    const getUsers = async () => {
      const response = await api.get("/users");
      setUsers(response.data);
    };

    getTasks();
    getUsers();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <CarteComponent key={task.id} task={task} users={users} />
      ))}
    </div>
  );
};

export default Home;
