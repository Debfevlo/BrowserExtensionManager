import DarkModeToggler from "./DarkModeToggler"


const Header = () => {
  return (
    <div className='w-full max-w-[1200px] flex justify-between border bg-Neutral-0 border-Neutral-100 dark:bg-Neutral-300 rounded-3xl mx-auto p-4 items-center shadow-md '>
        <img src="assets/images/logo.svg" alt="Extension Logo" className="w-32"/>
        <DarkModeToggler/>
    </div>
  )
}

export default Header