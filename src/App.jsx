import { BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react"

import { Navbar, Hero, About, Experience, Tech, Works, Contact, Footer} from './components'
import { LanguageContext } from "./contexts/languageContext"
import { IsMobileContext } from "./contexts/isMobileContext"

export default function App() {
  const languages = ["french", "english"]
  const [language, setLanguage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    const handleMediaQueryChange = (event) => {
      console.log('mediaquerychange: ', event.matches)
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])

  const handleLanguageChange = () => {
    setLanguage((language + 1) % languages.length)
  }

  return (
    <IsMobileContext.Provider value={isMobile}>
    <LanguageContext.Provider value={languages[language]}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar onLanguageChange={handleLanguageChange} />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Works />
          <div className="relative z-0">
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
    </IsMobileContext.Provider>
  )
}