import { useState } from "react";
import { AppleIcon, HoverAppleIcon } from "../../assets/icons/";
import { GoogleIcon, HoverGoogleIcon } from "../../assets/icons/";
import { XIcon, HoverXIcon } from "../../assets/icons/";
import styles from './IconContainer.module.css';


const IconContainer = () => {
  const [isHoveredApple, setIsHoveredApple] = useState(false);
  const [isHoveredGoogle, setIsHoveredGoogle] = useState(false);
  const [isHoveredX, setIsHoveredX] = useState(false);

  return (
    <div className={styles.iconContainer}>
     
      <a href="https://www.apple.com"
        className={styles.linkIcon}
        onMouseEnter={() => setIsHoveredApple(true)}
        onMouseLeave={() => setIsHoveredApple(false)}
      >
        {isHoveredApple ? <HoverAppleIcon /> : <AppleIcon />}
      </a>

      <a href="https://www.google.com"
        className={styles.linkIcon}
        onMouseEnter={() => setIsHoveredGoogle(true)}
        onMouseLeave={() => setIsHoveredGoogle(false)}
      >
        {isHoveredGoogle ? <HoverGoogleIcon /> : <GoogleIcon />}
      </a>

    
      <a href="https://x.com/"
        className={styles.linkIcon}
        onMouseEnter={() => setIsHoveredX(true)}
        onMouseLeave={() => setIsHoveredX(false)}
      >
        {isHoveredX ? <HoverXIcon /> : <XIcon />}
      </a>
    </div>
  );
};

export default IconContainer;