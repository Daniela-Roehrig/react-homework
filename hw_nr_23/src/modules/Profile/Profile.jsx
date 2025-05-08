import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/components/Button/Button';
import { logout } from '../../redux/auth/auth-slice';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
        <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
