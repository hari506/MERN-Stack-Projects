import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserDetails } from '../../actions/auth';
import { showAlert } from '../UI/alert';

const ChangeInformation = () => {
  let user = useSelector((state) => state.auth.user);
  let [userDetails, setUserDeails] = useState({
    id: user._id,
    name: user.name,
    email: user.email,
  });
  let dispatch = useDispatch();

  const handleInputField = (event) => {
    setUserDeails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      UpdateUserDetails(userDetails, (data) => {
        if (data.status === 'error') {
          alert('error', data.message);
        } else {
          showAlert('success', 'User Data Updataed SuccessFullay');
        }
      })
    );
  };
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data">
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            defaultValue={user?.name}
            required=""
            name="name"
            onChange={(event) => handleInputField(event)}
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            defaultValue={user?.email}
            required=""
            name="email"
            onChange={(event) => handleInputField(event)}
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={`/img/users/${user?.photo}`}
            alt="User photo"
          />
          <input
            className="form__upload"
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={(event) => handleInputField(event)}
          />
          <label htmlFor="photo">Choose new photo</label>
        </div>
        <div className="form__group right">
          <button
            className="btn btn--small btn--green"
            onClick={(event) => handleSubmitForm(event)}
          >
            Save settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeInformation;
