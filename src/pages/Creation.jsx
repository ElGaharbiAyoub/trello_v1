import Button from 'react-bootstrap/Button';
import '../styles/forms.css'
import Form from 'react-bootstrap/Form';
import '../styles/forms.css'

function Creation() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='Create'>

        <h2 className='mb-3'>Creation de taches</h2>
        <form className='needs-validation'>

        <div className='form-group mb-2'>
            <label htmlFor='email' className='form-label'>Titre</label>
            <input type="email" className='form-control' ></input>
            

        </div>
        <div className='form-group mb-2'>
            <label htmlFor='Description' className='form-label'> Description</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            {/* <div className="invalid-feedback">
                Please Enter your password
            </div> */}

        </div>


        <div className='form-group form-check mb-2'>
        {/* <label htmlFor='Collaborateur' className='form-label'> Collaborateur</label> */}
        <select>
        <option value="someOption" className='form-control'>Choose a Collaborator</option>
        </select>

        </div>


       

        <button type='submit' className='btn btn-info w-100 block mt-2' disabled>create task</button>
        </form>
    </div>
    </div>
  );
}

export default Creation;