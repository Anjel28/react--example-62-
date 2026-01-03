import React from 'react';

type Language = "en" | "hi";

interface LanguageContextType  {
   language: Language;
   setLanguage:  (lang: Language) => void;
}

 const LanguageContextType = React.createContext<LanguageContextType>({
    language: "en",
    setLanguage: ()  => {},
});


export default LanguageContextType;