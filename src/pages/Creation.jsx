import '../styles/forms.css'
import '../styles/forms.css'
import { useState } from 'react';
import api from '../api/users';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';

function Creation({users}) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Créez un nouvel objet pour la nouvelle tâche
    const newTask = {
        id: uuidv4(),
        title: title,
        discription: description,
        responsable: parseInt(selectedUser),
    };
  
        await api.post('/tasks', newTask)
        .then((response)=>{
            console.log('Task created successfully');
            setTitle('');
            setDescription('');
            setSelectedUser('');
            if (response)
            {
                navigate("/");
            }
        })
        .catch((error) => {
            console.error('Error creating task:', error);
        })
        // Réinitialisez les valeurs du formulaire
  };
  




    return (
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className='Create'>

                <h2 className='mb-3'>Creation de taches</h2>
                <form className='needs-validation' onSubmit={handleSubmit}>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title"  value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlSelect1">choose a colaborateur</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required>
                            <option></option>
                            {users.map((user)=>(
                                 <option key={user.id} value={user.id}>{user.name}</option>
                            ))}

                        </select>

                    </div>




                    <button type='submit' className='btn btn-info w-100 block mt-2'>create task</button>
                </form>
            </div>
        </div>
    );
}

export default Creation;