import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../actions/auth';
import { showAlert } from '../UI/alert';
const ChangePasswordForm = ({ user }) => {
  let [passwords, setPasswords] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  });

  let dispatch = useDispatch();
  const handleChangePasswordAction = (event) => {
    event.preventDefault();
    dispatch(
      changePassword(passwords, (data) => {
        if (data.status === 'error') {
          showAlert('error', 'something wrong please try after some time !');
        } else {
          showAlert('success', 'password changes successfully !');
        }

        setPasswords({
          passwordCurrent: '',
          password: '',
          passwordConfirm: '',
        });
      })
    );
  };

  const handleInputField = (event) => {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form
        className="form form-user-password"
        encType="multipart/form-data"
        onSubmit={(event) => handleChangePasswordAction(event)}
      >
        <div className="form__group">
          <label className="form__label" htmlFor="password-current">
            Current password
          </label>
          <input
            className="form__input"
            id="password-current"
            type="password"
            placeholder="••••••••"
            required=""
            name="passwordCurrent"
            value={passwords.passwordCurrent}
            minLength="7"
            onChange={(event) => handleInputField(event)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            New password
          </label>
          <input
            className="form__input"
            id="password"
            type="password"
            placeholder="••••••••"
            required=""
            name="password"
            value={passwords.password}
            minLength="8"
            onChange={(event) => handleInputField(event)}
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label className="form__label" htmlFor="password-confirm">
            Confirm password
          </label>
          <input
            className="form__input"
            id="password-confirm"
            type="password"
            placeholder="••••••••"
            required=""
            name="passwordConfirm"
            minLength="8"
            value={passwords.passwordConfirm}
            onChange={(event) => handleInputField(event)}
          />
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green btn--save-password">
            Save password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
