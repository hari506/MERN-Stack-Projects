import { useSelector } from 'react-redux';
import NavSection from './navSection';
import ChangeInformation from './changeInfo';
import ChangePasswordForm from './changePasawordForm';
import { useNavigate } from 'react-router-dom';
const Account = () => {
  //let [user, setUser] = useState({});
  let user = useSelector((state) => state.auth.user);
  let navigator = useNavigate();
  return (
    <main className="main">
      {user ? (
        <div className="user-view">
          <NavSection user={user} />
          <div className="user-view__content">
            <ChangeInformation />
            <div className="line">&nbsp;</div>
            <ChangePasswordForm user={user} />
          </div>
        </div>
      ) : (
        navigator('/')
      )}
    </main>
  );
};

export default Account;
