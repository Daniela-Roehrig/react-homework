import { AppleIcon } from "../../assets/icons/";
import { GoogleIcon } from "../../assets/icons/";
import { XIcon } from "../../assets/icons/";
import styles from './IconContainer.module.css';

const IconContainer = () => {
  return (
    <div className={styles.iconContainer}>
      <a href="https://www.apple.com" className={styles.linkIcon}>
        <AppleIcon className={styles.icon} /> 
      </a>

      <a href="https://www.google.com" className={styles.linkIcon}>
        <GoogleIcon className={styles.icon}  />
      </a>

      <a href="https://x.com/" className={styles.linkIcon}>
        <XIcon className={styles.icon}  /> 
      </a>
    </div>
  );
};

export default IconContainer;
