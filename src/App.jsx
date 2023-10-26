import { BrowserRouter } from "react-router-dom"
import { useState } from "react"

import { Navbar, Hero, About, Experience, Tech, Works, Contact} from './components'

export default function App() {
  const languages = ["french", "english"]
  const [language, setLanguage] = useState(0)

  const handleLanguageChange = () => {
    setLanguage((language + 1) % languages.length)
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={languages[language]} onLanguageChange={handleLanguageChange} />
          <Hero language={languages[language]} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}