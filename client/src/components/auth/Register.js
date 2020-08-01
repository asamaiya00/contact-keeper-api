import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const { setAlert } = useContext(AlertContext);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '')
      setAlert('Please Enter all fields', 'danger');
    else if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      console.log('Register Submit');
    }
  };

  const { name, email, password, password2 } = user;
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            required
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
