import { Link } from "react-router-dom"
import { dev, navLinks } from "../constants/constants"
import { useState } from "react"

import { logo, hamburger, close, france, uk } from '../assets'
import { styles } from "../styles"

export default function Navbar({ language, onLanguageChange }) {
    const languages = {
        french: {
            src: uk
        },
        english: {
            src: france
        }
    }

    const [active, setActive] = useState("")
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-10 bg-primary mx-auto`}
        >
            <div
                className="w-full flex justify-between items-center max-w-7xl mx-auto"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 hover: cursor-pointer"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <img 
                        src={logo} 
                        alt="logo"
                        className="w-20 h-20 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold flex">Morgan Foucaut&nbsp;<span className="md:block hidden">| {dev[language]}</span></p>
                </Link>

                {/* Desktop menu */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {
                        navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.id ? 
                                    "text-white" : 
                                    "text-secondary"
                                } hover:text-white text-[15px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.id)}
                            >
                                <a href={`#${link.id}`}>{link[`title_${language}`]}</a>
                            </li>
                        ))
                    }
                </ul>
                {/* Switch language */}
                <img 
                    className="hidden sm:block w-[1.2rem] h-[1.2rem] cursor-pointer"
                    src={languages[language].src}
                    alt={languages[language].language}
                    onClick={() => {
                        onLanguageChange()
                    }}
                />
                
                {/* Mobile menu */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        className="w-[2rem] h-[2rem] object-contain cursor-pointer"
                        src={!toggleMenu ? hamburger : close}
                        alt="menu"
                        onClick={() => setToggleMenu(!toggleMenu)} 
                    />
                    <div className={`${!toggleMenu ? "hidden" : "flex flex-col"} p-5 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col">
                            {
                                navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${
                                            active === link.id ? 
                                            "text-white" : 
                                            "text-secondary"
                                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                                        onClick={() => {
                                            setToggleMenu(!toggleMenu)
                                            setActive(link.id)
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link[`title_${language}`]}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* Switch language */}
                        <img 
                            className="w-[1.2rem] h-[1.2rem] mt-2 cursor-pointer self-end"
                            src={languages[language].src}
                            alt={languages[language].language}
                            onClick={() => {
                                onLanguageChange()
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}