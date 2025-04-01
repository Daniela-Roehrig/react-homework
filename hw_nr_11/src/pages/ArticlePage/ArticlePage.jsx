import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; 
import styles from './ArticlePage.module.css';

const ArticlePage = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const fetchArticle = async () => {
    
      const fetchedArticle = { id, title: `Статья ${id}`, content: `Содержание статьи ${id}...` };
      setArticle(fetchedArticle);
    };

    fetchArticle();
  }, [id]);

  const handleGoBack = () => {
    navigate('/articles');
  };

  if (!article) return <p>Загрузка статьи...</p>;

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p className={styles.path}>Текущий путь: {location.pathname}</p>
      <button onClick={handleGoBack}>Назад</button>
    </div>
  );
};

export default ArticlePage;
