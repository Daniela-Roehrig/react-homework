import style from './LanguageSwitcher.module.css'

import { useLanguage } from '../../context/LanguageContext';  


const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button className={style.button} onClick={toggleLanguage}>
            {language === 'en' ? 'Switch language' : 'Переключить язык'}
        </button>
    );
};

export default LanguageSwitcher;
