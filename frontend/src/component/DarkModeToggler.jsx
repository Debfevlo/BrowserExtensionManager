import { useDarkMode } from "../context/ThemeContext"



const DarkModeToggler = () => {
    
   const {darkMode, setDarkMode} = useDarkMode ()

    const handleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }

  return (
    <button className=' w-8 h-8 md:w-12 md:h-12 text-center bg-Neutral-300 rounded-lg flex justify-center items-center transition-all ease-out dark:bg-dark-blue' onClick={handleDarkMode}>
            {
                darkMode ? <img src="assets/images/icon-sun.svg" alt="" className=""/>  : <img src="assets/images/icon-moon.svg" alt=" Icon moon"  />
            }
            
    </button>
  )
}

export default DarkModeToggler