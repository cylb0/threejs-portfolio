import { BrowserRouter } from "react-router-dom"
import { lazy, useState } from "react"

const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Tech = lazy(() => import('./components/Tech'))
const Works = lazy(() => import('./components/Works'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

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
        <About language={languages[language]} />
        <Tech language={languages[language]} />
        <Experience language={languages[language]} />
        <Works language={languages[language]} />
        <div className="relative z-0">
          <Contact language={languages[language]} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}