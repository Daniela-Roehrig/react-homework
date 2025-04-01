import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleListPage.module.css'

const articles = [
  { id: 1, title: 'Статья 1' },
  { id: 2, title: 'Статья 2' },
  { id: 3, title: 'Статья 3' },
  { id: 4, title: 'Статья 4' },
  { id: 5, title: 'Статья 5' }
];

const ArticlesList = () => {
  return (
    <div className={styles.articlesList}>
      <h1>Список статей</h1>
      <ul >
        {articles.map((article) => (
          <li className={styles.articlePoint} key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
