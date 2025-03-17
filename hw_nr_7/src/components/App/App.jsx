import { LanguageProvider } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Content from '../Content/Content';

import style from './App.module.css'


const App = () => {
  return (
    <LanguageProvider>
      <div className={style.app}>
        <Content />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default App;
