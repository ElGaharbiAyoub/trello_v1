import '../styles/forms.css'

function Signup() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='Sing'>

        <h2 className='mb-3'>SIGN UP</h2>
        <form className='needs-validation'>

        <div className='form-group mb-2'>
            <label htmlFor='Name' className='form-label'> Name :</label>
            <input type="Name" className='form-control'></input>
           </div>

        <div className='form-group mb-2'>
            <label htmlFor='Email' className='form-label'> Email : </label>
            <input type="Email" className='form-control' ></input>
            </div>

            <div className='form-group mb-2'>
            <label htmlFor='password' className='form-label'> Password :</label>
            <input type="password" className='form-control'></input>
             </div>

             <div className='form-group mb-2'>
            <label htmlFor='password' className='form-label'> Confirmation password :</label>
            <input type="password" className='form-control'></input>
             </div>
        

        <button type='submit' className='btn btn-outline-info w-100 block mt-2'>SIGN IN</button>
        </form>
    </div>
    </div>
  );
}

export default Signup;