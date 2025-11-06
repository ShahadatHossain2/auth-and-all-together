import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Context";

const Register = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const isChecked = e.target.terms.checked;

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center mt-5">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            autoComplete="current-password"
          />
          <div>
            <label className="label">
              <input name="terms" type="checkbox" className="checkbox" />
              Accept our terms and conditions!
            </label>
          </div>
          <button className="btn btn-neutral my-2">Register</button>{" "}
          <p>
            Already have an account? Please{" "}
            <Link className="text-blue-400 underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
