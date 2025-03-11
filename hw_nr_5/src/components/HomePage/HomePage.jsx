import styles from "./HomePage.module.css";
import { SpotifyLogo } from "../../assets/logo";
import IconContainer from "../IconContainer/IconContainer";  

const HomePage = () => {
  return (
    <section className={styles.blackContainer}>
      <a className={styles.first} href="https://open.spotify.com/intl-de/"><SpotifyLogo /></a>
      <h2 className={styles.header}>LIFE IS WASTED ON THE LIVING</h2>
      <ul className={styles.list}>
        <li>Sign in</li>
        <li>with</li>
      </ul>

      <IconContainer />
    </section>
  );
}

export default HomePage;
