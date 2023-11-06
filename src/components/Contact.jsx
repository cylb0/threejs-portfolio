import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"

import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"

import { fadeIn, titleSlide } from "../utils/motions"
import { styles } from "../styles"

import { contactSection } from '../constants/constants'

const Contact = ({ language }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        consent: false
    })
    const [loading, setLoading] = useState(false)

    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setConfirm(false)
        setLoading(true)

        if (!form.consent) {
            setError(contactSection[language].consent_alert)
            return
        }

        emailjs.send(
            "service_iwtzik9", 
            "template_1o2tgyl", 
            {
                from_name: form.name,
                to_name: 'Morgan',
                from_email: form.email,
                to_email: 'foucaut.morgan@gmail.com',
                message: form.message,
            },
            "egewM09IJBIs5pazQ"
        )
        .then(() => {
              setLoading(false);
              setConfirm(true);
    
              setForm({
                name: "",
                email: "",
                message: "",
                consent: false
              });
            },
            (error) => {
                setLoading(false)
                console.error(error)
                setError(contactSection[language].error)
            }
        )
    }
    
    const printState = () => {
        console.log(form)
    }

    return (
        <>
            <div onClick={printState}>PRINT</div>
            <motion.div variants={titleSlide(0.2)}>
                <p className={styles.subTitle}>{contactSection[language].message}</p>
                <h2 className={styles.sectionTitle}>Contact<span className={styles.textOrange}>.</span></h2>
            </motion.div>
            <div className="flex">
                <motion.div 
                    variants={fadeIn("right", "spring", 1.2, 0)}
                    className="w-full sm:w-3/5"
                >
                    {confirm && (
                        <div className={styles.confirm}>{contactSection[language].confirm}</div>
                    )}
                    {error !== "" && (
                        <div className={styles.error}>{error}</div>
                    )}

                    <form 
                        onSubmit={handleSubmit}
                        className="w-full bg-[#1d1836] rounded-xl p-5"
                    >
                        <label className="flex flex-col">
                            <span>{contactSection[language].name_label}</span>
                            <input 
                                type="text" 
                                name="name" 
                                value={form.name}
                                onChange={handleChange} 
                                placeholder={contactSection[language].name_placeholder} 
                                className="p-2 bg-tertiary rounded-lg text-[14px] placeholder:text-secondary text-white"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span>{contactSection[language].email_label}</span>
                            <input 
                                type="email" 
                                name="email" 
                                value={form.email}
                                onChange={handleChange} 
                                placeholder={contactSection[language].email_placeholder} 
                                className="p-2 bg-tertiary rounded-lg text-[14px] placeholder:text-secondary text-white"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span>{contactSection[language].email_label}</span>
                            <textarea
                                rows={10} 
                                name="message" 
                                value={form.message}
                                onChange={handleChange} 
                                placeholder={contactSection[language].message_placeholder} 
                                className="p-2 bg-tertiary rounded-lg text-[14px] placeholder:text-secondary text-white"
                            />
                        </label>

                        <label className="flex gap-5 mt-3">
                            <input 
                                type="checkbox"
                                name="consent"
                                checked={form.consent}
                                onChange={handleChange}
                                className=""
                            />
                            <span>{contactSection[language].consent_label}</span>
                        </label>

                        <button type="submit" className="border-2 border-[#b98a16] rounded-full mt-5 px-5 py-2 hover:bg-white hover:text-[#b98a16] font-black">{loading ? contactSection[language].button_loading : contactSection[language].button}</button>
                    </form>
                </motion.div>
                <motion.div 
                    variants={fadeIn("left", "spring", 1.2, 0)}
                    className="w-2/5 hidden sm:block"
                >
                    <EarthCanvas />
                </motion.div>
            </div>
        </>
    )
}

export default SectionWrapper(Contact, "contact")