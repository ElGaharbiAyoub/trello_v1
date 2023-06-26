import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import api from '../api/users';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faEye, faUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/carte.css';

function CarteComponent({ task, users, onDelete, onUpdate }) {
  const filterUser = users.filter((user) => {
    return user.id === task.responsable;
  });

  const userName = filterUser.length > 0 ? filterUser[0].name : '';

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.id}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async () => {
    setIsEditing(!isEditing);
  
    if (!isEditing) {
      try {
        await api.put(`/tasks/${task.id}`, {
          title: updatedTitle,
          description: updatedDescription
        });
        onUpdate(updatedTitle, updatedDescription);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  return (
    <Card style={{ width: '18rem' }} className="carte text-center m-5">
      <div className="enteteCarte"></div>
      {userName && (
        <span className="text-start userName fw-bold p-1">
          <FontAwesomeIcon icon={faUser} /> {userName}
        </span>
      )}
      <Card.Body>
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              rows="3"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>
            <Card.Title className="title">{task.title}</Card.Title>
            <Card.Text className="description">{task.description}</Card.Text>
          </>
        )}
        <Button href="#" variant="outline-success" className="btn-sm mx-1">
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button
          href="#"
          variant="outline-primary"
          className="btn-sm mx-1"
          onClick={handleUpdate}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          href="#"
          variant="outline-danger"
          className="btn-sm mx-1"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarteComponent;
