import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      history.push('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;