import { useForm } from "react-hook-form";
import '../styles/forms.css'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
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
