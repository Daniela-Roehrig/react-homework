import React from 'react';  
import style from './App.module.css'
import ListItems from '../ListItems/ListItems.jsx';  


const App = () => {
  return (
    <div className={style.app}>
      <h1 className={style.header}>Список элементов</h1>
      <ListItems />
    </div>
  );
}

export default App;
