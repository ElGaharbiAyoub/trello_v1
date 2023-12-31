import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/users"
import "../styles/Layout.css";


// import Button from 'react-bootstrap/Button';
import '../styles/forms.css'
// import Form from 'react-bootstrap/Form';

import '../styles/forms.css'
import { useNavigate } from "react-router-dom";

function Signup({users, setUsers}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {

    try {
      const request = {
        id: uuidv4(),
        ...data
      };
      const response = await api.post("/users", request);
      setUsers(...users, response.data);
      if (response) {
        navigate('/login');
        alert("good");
      }
    } catch (error) {
      alert("nooop try again !!" + error);
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100 layout-container'>
      <div className='sign'>
        <h2 className='mb-3'>Sign Up</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <form className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>
                <button className="btn btn-success" type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
