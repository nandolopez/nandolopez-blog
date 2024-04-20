import { useEffect, useState } from "react";

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const onClickButtonToggleDarkMode = () => {
    const change = !darkMode
    document.documentElement.classList.remove("dark");
        
    if (change) {
      document.documentElement.classList.add("dark");
    }
    
    setDarkMode(change)
    localStorage.setItem("DarkMode", change.toString());
  };

  useEffect(() => {
    setDarkMode(localStorage.getItem("DarkMode") === "true")
  },[])

  return (
    <button onClick={onClickButtonToggleDarkMode} className="">
      {darkMode ? "🌙" : "🌞"}
      </button>
  );
}

export default ButtonDarkMode