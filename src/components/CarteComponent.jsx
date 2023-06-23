import Card from 'react-bootstrap/Card';
import '../styles/carte.css';
import Button from 'react-bootstrap/Button';
import api from "../api/users"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function CarteComponent({ task, users, onDelete }) {
  const filterUser = users.filter((user) => {
    return user.id === task.responsable;
  });

  const userName = filterUser.length > 0 ? filterUser[0].name : '';

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.id}`).then(
        alert("deleted"))
    }
    
    catch(error ){
      alert("not deleted!!!!!")

    }
     
  
    
  };

  return (
    <Card style={{ width: '18rem' }} className='carte text-center m-5'>
      <div className='enteteCarte'></div>
      {userName && (
        <span className='text-start userName fw-bold p-1'>
          <FontAwesomeIcon icon={faUser} /> {userName}
        </span>
      )}
      <Card.Body>
        <Card.Title className='title'>{task.title}</Card.Title>
        <Card.Text className='description'>{task.discription}</Card.Text>
        <Button href='#' variant='outline-success' className='btn-sm mx-1'>
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button href='#' variant='outline-primary' className='btn-sm mx-1'>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button
          href='#'
          variant='outline-danger'
          className='btn-sm mx-1'
          onClick={handleDelete} 
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarteComponent;