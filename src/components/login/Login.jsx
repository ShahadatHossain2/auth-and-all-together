import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/Context";

const Login = () => {
  const { loginUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center mt-5">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            autoComplete="current-password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral my-2">Login</button>
          <p>
            Don't have an account? Please{" "}
            <Link className="text-blue-400 underline" to="/register">
              Register
            </Link>
          </p>
          <button onClick={handleLoginWithGoogle} className="btn">
            Login in With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
