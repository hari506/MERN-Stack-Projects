import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/auth';
import { showAlert } from '../UI/alert';

const Login = () => {
  let [formData, setFormData] = useState('');
  let navigator = useNavigate();
  let dispatch = useDispatch();

  const handleFormInput = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateLoginForm = async (e) => {
    e.preventDefault();
    dispatch(
      loginAction(formData, (data) => {
        if (data.status === 'error') {
          showAlert('error', data.message);
        } else {
          showAlert('success', 'Loggin successfully!');
          navigator('/');
        }
      })
    );
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required=""
              onChange={handleFormInput}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required=""
              minLength="7"
              onChange={handleFormInput}
            />
          </div>
          <div className="form__group">
            <button
              className="btn btn--green"
              onClick={(e) => validateLoginForm(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
