import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для загрузки данных пользователя
  const fetchUser = async () => {
    setLoading(true); // Устанавливаем состояние загрузки в true
    setError(null); // Сбрасываем ошибки перед новой загрузкой
    try {
      const { data } = await axios.get('https://randomuser.me/api/');
      setUser(data.results[0]); // Обновляем состояние с новыми данными пользователя
    } catch {
      setError('Error while loading'); // Если ошибка, выводим сообщение
    } finally {
      setLoading(false); // Устанавливаем состояние загрузки в false
    }
  };

  // Вызовем fetchUser при монтировании компонента
  useEffect(() => {
    fetchUser();
  }, []);

  // Обработчик для кнопки, который вызывает fetchUser
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
