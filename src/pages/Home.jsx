import { useEffect, useState } from "react";
import "../styles/home.css";
import api from "../api/users";
import CarteComponent from "../components/CarteComponent";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ users, setUsers }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get("/users");
      setUsers(response.data);
    };

    getUsers();
  }, [setUsers]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await api.get("/tasks");
      setTasks(response.data);
    };
    getTasks();
  }, [tasks]);

  return (
    <div className="p-3">
      <div className="text-right">
        <Link to="/create" className="ml-auto" >
          <Button variant="outline-info">
            Add <FontAwesomeIcon icon={faAdd} />
          </Button>
        </Link>
      </div>

      <div className="homepage container">
        {tasks.map((task) => (
          <CarteComponent
            key={task.id}
            task={task}
            setTasks={setTasks}
            users={users}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
