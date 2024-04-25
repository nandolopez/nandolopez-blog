import { useEffect, useState } from "react";

const LanguageSwitcherComponent = () => {
  const [english, setEnglish] = useState<string>("#")
  const [spanish, setSpanish] = useState<string>("#")

  
  useEffect(() => {
    const uri = window.location.href;

    if (uri.includes("/es/")) {
      setEnglish(
        uri.replace(window.location.host+"/es/", window.location.host)
      );
    } else {
      setSpanish(uri.replace(window.location.host, window.location.host+"/es"));
    }
  }, []);

  const setLanguage = (lang: string) => localStorage.setItem('language', lang)

  return (
    <>
      <a onClick={()=>setLanguage('en')} href={english}>EN</a> |
      <a onClick={()=>setLanguage('es')} href={spanish}>ES</a>
    </>
  );
};

export default LanguageSwitcherComponent;
