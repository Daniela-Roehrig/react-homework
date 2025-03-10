import { useState } from 'react';
import { peopleList } from './peopleList';  
import styles from './List.module.css';

const List = () => {
  const [people, setPeople] = useState(peopleList);

  const removePerson = (id) => {
   
    setPeople((prevPeople) => prevPeople.filter(person => person.id !== id));
  };

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.listHeader}>Список приглашенных</h1>
      {people.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul className={styles.peopleList}>
          {people.map(person => (
            <li key={person.id} className={styles.personItem}>
              <span>{person.name}, {person.age} лет</span>
              <button onClick={() => removePerson(person.id)} className={styles.removeBtn}>
                Удалить
              </button>z
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

