import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOutAction } from '../../actions/auth';

const Header = () => {
  const navigator = useNavigate();
  let auth = useSelector((state) => state.auth);
  let user = auth?.user;
  let dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOutAction());
    navigator('/');
  };

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <button className="nav__el" onClick={() => navigator('/')}>
          All tours
        </button>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      {user ? (
        <nav className="nav nav--user">
          <button className="nav__el" onClick={() => navigator('/me')}>
            <img
              className="nav__user-img"
              src={`/img/users/${user.photo}`}
              alt={`${user.name}`}
            />
            <span>{user.name}</span>
          </button>
          <button className="nav__el nav__el--logout" onClick={handleLogout}>
            Log out
          </button>
        </nav>
      ) : (
        <nav className="nav nav--user">
          <button className="nav__el" onClick={() => navigator('/login')}>
            Log in
          </button>
          <button
            className="nav__el nav__el--cta"
            onClick={() => navigator('/signUp')}
          >
            Sign up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
