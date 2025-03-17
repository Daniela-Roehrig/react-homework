import style from './Content.module.css'
import { useLanguage } from '../../context/LanguageContext';

const Content = () => {
    const { language } = useLanguage();

    return (
        <div className={style.container}>
            <h1>{language === 'en' ? 'English language was chosen!' : 'Выбран русский язык!'}</h1>
        </div>
    );
};

export default Content;
