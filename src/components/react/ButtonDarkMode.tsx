import { useEffect, useState } from "react";
/**
 * 
 * @returns Button dark mode switcher
 * 
 */
const ButtonDarkMode = () => {
  // Dark mode status
  const [darkMode, setDarkMode] = useState<boolean>(false);


  /**
   * Dark mode toggler
   */
  const onClickButtonToggleDarkMode = () => {
    // change = oposite status fo darkmode
    const change = !darkMode

    // Remove dark mode by default in DOM
    document.documentElement.classList.remove("dark");
    
    // if switch to dark mode
    if (change) {
      // Add dark mode by default in DOM
      document.documentElement.classList.add("dark");
    }
    
    // Save current change status in Darkmode control for show the icon and in localhost
    setDarkMode(change)
    localStorage.setItem("DarkMode", change.toString());
  };

  // Set darkmode by default
  useEffect(() => {
    setDarkMode(localStorage.getItem("DarkMode") === "true")
  },[])
  

  // Dark mdoe button toggler / switchser
  return (
    <button onClick={onClickButtonToggleDarkMode} className="">
      {darkMode ? "🌙" : "🌞"}
      </button>
  );
}

export default ButtonDarkMode