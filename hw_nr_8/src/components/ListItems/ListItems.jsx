import React from 'react';
import style from './ListItems.module.css'
import { useState, useEffect } from 'react';

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, [/* items */])



  return (
    <div>
      <input className={style.button} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={style.button} onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li className={style.list} key={index}><input className={style.input} type="checkbox"></input>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
