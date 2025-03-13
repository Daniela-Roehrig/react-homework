import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchUser = async () => {
    setLoading(true); e
    setError(null); 
    try {
      const { data } = await axios.get('https://randomuser.me/api/');
      setUser(data.results[0]); 
    } catch {
      setError('Error while loading'); 
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchUser();
  }, []);

  
  const handleFetchNewUser = () => {
    fetchUser();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.profileContainer}>
      
      <div className={styles.profileInfo}>
        <h1> {user.name.title} {user.name.first} {user.name.last}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
     
      <button className={styles.button} onClick={handleFetchNewUser}>
        Load New User
      </button>
       </div>
    </div>
  );
};

export default UserProfile;
