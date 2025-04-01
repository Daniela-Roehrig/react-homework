import HomePage from '../../pages/HomePage/HomePage'
import ArticleListPage from '../../pages/ArticleListPage/ArticleListPage'
import ArticlePage from '../../pages/ArticlePage/ArticlePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

import styles from'./App.module.css'


function App() {


  return (
    <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article-list" element={<ArticleListPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
    </div>
  )
}

export default App
