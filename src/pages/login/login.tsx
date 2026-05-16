import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route,Routes} from 'react-router-dom';
import Signup from '../signup/signup';
export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Submitted data:', { email, password });
  };
    <Routes>
    <Route path="/cart" element={<Signup/>}></Route>
  </Routes>

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 formBar">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn-section text-center">
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
            <Link to='/signup'
            className='btn btn-dark'>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

