import { useNavigate } from 'react-router-dom';

const NavSection = () => {
  let navigator = useNavigate();
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li className="side-nav--active">
          <button className="side-menu-btn" onClick={() => navigator('/me')}>
            <img src="/img/icons.svg#icon-user" alt="settings" />
            Settings
          </button>
        </li>
        <li>
          <button
            className="side-menu-btn"
            onClick={() => navigator('/bookings')}
          >
            <img src="/img/icons.svg#icon-user" alt="bookings" />
            My bookings
          </button>
        </li>
        <li>
          <button
            className="side-menu-btn"
            onClick={() => navigator('/reviews')}
          >
            <img src="/img/icons.svg#icon-user" alt="reviews" />
            My reviews
          </button>
        </li>
        <li>
          <button
            className="side-menu-btn"
            onClick={() => navigator('/billing')}
          >
            <img src="/img/icons.svg#icon-user" alt="billings" />
            Billing
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
