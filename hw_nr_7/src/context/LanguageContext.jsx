import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext('en');

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Der Hook, um den Kontext zu verwenden
export const useLanguage = () => {
  return useContext(LanguageContext);
};
