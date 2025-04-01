
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = ()=> {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.link} to="/">Главная</NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/article-list">Статьи</NavLink>
            </li>
           
        </ul>

    )
}

export default Navigation;