import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";
export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const {HandleLogin} = useStore();

  function handleSubmit() {
    let errors: any = {};

    if (!password.trim()) {
      errors.password = "password is not defined";
    }
    if (!email.trim()) {
      errors.email = "email is not defined";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "email is invalid";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  function check(e: React.SubmitEvent) {
    e.preventDefault();
    if (handleSubmit()) {
      if (email && password) {
        HandleLogin(email,password);
        navigate("/foods");
      } else {
        alert("invalid credentials");
      }
    }
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 formBar">
        <div
          className="card p-4 shadow-sm"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={check}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="btn-section text-center">
              <button type="submit" className="btn btn-primary me-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
