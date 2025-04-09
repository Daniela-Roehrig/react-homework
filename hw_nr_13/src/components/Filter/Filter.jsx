import { setFilter } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Filter.module.css';

const Filter = () => {
 
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (elements) => {
    dispatch(setFilter(elements.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        value={filter}  
        onChange={handleChange} 
        placeholder="Filter users"
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
