import { createContext, useContext, useState } from "react";
import en from "../langs/en.json";
import cro from "../langs/cro.json";


const translations = {
 en: en as Record<string,string>,
 cro: cro as Record<string,string>
} 


const useTranslation = () => {
    const { language } = useContext(LanguageContext);
  

    const translate = (key:string) => {
        const translation = translations[language][key];
        
        return translation || key;

    }

    return translate;
}

export default useTranslation;

type LanguageContextType={
  language: "cro" | "en",
  toggleLanguage: () => void
}
export const LanguageContext = createContext<LanguageContextType>({
  language: "cro",
  toggleLanguage: () => {}
});

type LanguageProviderProps={
  children:React.ReactNode
}
export const LanguageProvider = ({children}:LanguageProviderProps) => {
  const [language, setLanguage] = useState<"cro" | "en">("en");

  const toggleLanguage = () => setLanguage((prev) => prev === "cro" ? "en" : "cro");

  return (
    <LanguageContext.Provider value={{
        language,
        toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}