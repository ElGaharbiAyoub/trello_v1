import '../styles/forms.css'

function LoginForm() {
    const addUserHandler = async (user)=> {
        const request = {
            id: uuidv4(),
            ...user
        }
        const response = await api.post("/users", request)
        setUsers([...users, response.data])
    }

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>

        <h2 className='mb-3'>login form</h2>
        <form className='needs-validation'>

        <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'> Email address</label>
            <input type="email" className='form-control' required></input>
            <div className="invalid-feedback">
                Please Enter your Email
            </div>

        </div>
        <div className='form-group mb-2'>
            <label htmlFor='password' className='form-label'> Password</label>
            <input type="password" className='form-control' required ></input>
            <div className="invalid-feedback">
                Please Enter your password
            </div>

        </div>
        <div className='form-group form-check mb-2'>
        <input type="checkbox" className='form-check-input'></input>
        <label htmlFor='check' className='form-check-label'> Remember me</label>

        </div>

        <button type='submit' className='btn btn-outline-info w-100 block mt-2'>LOG IN</button>
        </form>
    </div>
    </div>
  );
}

export default LoginForm;