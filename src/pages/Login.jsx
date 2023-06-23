
import { useForm } from "react-hook-form";

import Button from 'react-bootstrap/Button';
import '../styles/forms.css'
import Form from 'react-bootstrap/Form';
import '../styles/forms.css'
import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const addUserHandler = async (user)=> {
        const request = {
            id: uuidv4(),
            ...user
        }
        const response = await api.post("/users", request)
        setUsers([...users, response.data])
    }
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const response = axios.get(`http://[::1]:3002/users/?email='${data.email}&password=${data.password}`);

    if (!response) {
      alert("Your credentials are incorrect, please try again later.");
    } else {
      // i have to retrieve response data (id, name, email, password) 
      // so that i can compare it with the input of the user from the login form in order to either grant him access or deny him
      // and to store the data locally in order to be used in following CRUD tasks 
    }

    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>

    <h2 className='mb-3'>Login</h2>
        
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form  className='needs-validation'onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                className={`form-control ${errors.email ? "is-invalid" : "is-valid"}`}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                className={`form-control ${errors.password ? "is-invalid" : "is-valid"}`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>
            <button className="btn btn-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Login;
