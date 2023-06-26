import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import api from '../api/users';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faEye, faUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/carte.css';
import Modal from 'react-bootstrap/Modal';

function CarteComponent({ task, users, onDelete, onUpdate }) {
  const filterUser = users.filter((user) => {
    return user.id === task.responsable;
  });

  const userName = filterUser.length > 0 ? filterUser[0].name : '';

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

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


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setComment("");
  };


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleCommentSubmit = (comment) => {
    // Faites ce que vous souhaitez avec le commentaire, par exemple, enregistrez-le dans une base de données
    onCommentSubmit(comment);
    // Réinitialisez la valeur du commentaire
    setComment("");
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
        <Button href="#" variant="outline-success" className="btn-sm mx-1" onClick={handleModalOpen}
        >
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

      {/* Fenêtre modale */}

      <Modal show={showModal} onHide={handleModalClose} className='modals'>
        <Modal.Header closeButton className='text-light modalHeader'>
          <Modal.Title>User : {userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <p><strong>Title :</strong> {task.title} </p>
          <p><strong>Description :</strong> {task.discription}</p>

        </Modal.Body>

        <div className='modalfooter'>
          <div className="form-group">
            <label htmlFor="commentInput "><strong>Ajouter un commentaire :</strong></label>
            <input type="text" className="form-control my-3" id="commentInput" value={comment} onChange={handleCommentChange} />
          </div>
          <Button variant="dark" onClick={handleCommentSubmit}>
            Envoyer
          </Button>
        </div>
      </Modal>

    </Card>
  );
}

export default CarteComponent;
