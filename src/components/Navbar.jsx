import { Link } from "react-router-dom"
import { navLinks } from "../constants/constants"
import { useState } from "react"

import { logo, hamburger, close } from '../assets'

export default function Navbar() {
    const [active, setActive] = useState("")
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav
            className="w-full flex items-center px-5 py-3 fixed top-0 z-10 bg-primary"
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
                    <p className="text-white text-[18px] font-bold flex">Morgan Foucaut&nbsp;<span className="sm:block hidden">| Web-developper</span></p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {
                        navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.id ? 
                                    "text-white" : 
                                    "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.id)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        className="w-[2rem] h-[2rem] object-contain cursor-pointer"
                        src={!toggleMenu ? hamburger : close}
                        alt="menu"
                        onClick={() => setToggleMenu(!toggleMenu)} 
                    />
                    <div className={`${!toggleMenu ? "hidden" : "flex"} p-5 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}>
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
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}