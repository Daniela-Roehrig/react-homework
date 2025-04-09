import { useSelector } from 'react-redux';
import styles from './User.module.css'

const mapStateToProps = (state) => ({
  user: state.user, 
});

const User = () => {

  const user = useSelector((state) => state.user);

  const mapState = mapStateToProps({ user: user });

  return (
    <div className={styles.userBox}>
      <h2>User Information</h2>
      <p>Name: {mapState.user.name}</p>
      <p>Status: {mapState.user.status}</p>
    </div>
  );
};

export default User;
