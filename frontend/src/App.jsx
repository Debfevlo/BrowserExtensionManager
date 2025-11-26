import BrowserExtension from './component/BrowserExtension'
import Header from './component/Header'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  return (
    <ThemeProvider>
      <div className="px-6 md:px-0 bg-gradient-to-t from-light-blue to-light-cyan pt-8 dark:bg-gradient-to-t dark:from-deep-blue dark:to-dark-blue dark:text-white transition-colors duration-500">
          <Header/>
          <BrowserExtension/>
      </div>
    </ThemeProvider>
      
  )
}

export default App