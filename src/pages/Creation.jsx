import Button from 'react-bootstrap/Button';
import '../styles/forms.css'
import Form from 'react-bootstrap/Form';
import '../styles/forms.css'

function Creation({users}) {

    return (
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className='Create'>

                <h2 className='mb-3'>Creation de taches</h2>
                <form className='needs-validation'>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" required></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlSelect1">choose a colaborateur</label>
                        <select class="form-control" id="exampleFormControlSelect1" required>
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