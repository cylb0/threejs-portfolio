import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { SectionWrapper } from "../hoc"

import { titleSlide } from '../utils/motions'
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../styles'

import { experience, experiences } from '../constants/constants'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'

const ExperienceCard = ({ experience }) => {
    const language = useContext(LanguageContext)

    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #e98a16' }}
            date={experience.date}
            iconStyle={{ background: 'white' }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img 
                        src={experience.icon}
                        alt={`${experience.at} icon`}
                        className="w-[80px] object-fill"
                    />
                </div>
            }
        >
            <h3 className="text-[#b98a16] text-[24px] font-bold">{experience[`title_${language}`]}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
                <span>{experience.at}</span>
                {
                    experience.at && experience.where && <span>&nbsp;-&nbsp;</span>
                }
                <span>{experience.where}</span>
            </p>
            <ul
                className="marker:text-[#b98a16] mt-2 list-disc ml-5"
            >
                {
                    Array.isArray(experience[`content_${language}`]) &&
                    experience[`content_${language}`].map((element, index) => (
                        <li 
                            key={index}
                            className="text-white pl-1 tracking-wide"
                        >
                            {element}
                        </li>
                    ))
                }
            </ul>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    const language = useContext(LanguageContext)

    return (
        <>
            <motion.div variants={titleSlide(0.2)}>
                <p className={styles.subTitle}>{experience[language].subtitle}</p>
                <h2 className={styles.sectionTitle}>{experience[language].title}<span className={styles.textOrange}>.</span></h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} language={language} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
        
    )
}

export default SectionWrapper(Experience, "experience")