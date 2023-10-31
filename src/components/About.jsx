import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { about, competences } from '../constants/constants'

import { SectionWrapper } from '../hoc'
import { titleSlide, fadeIn } from '../utils/motions'

const CompetenceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
                className="w-full p-px rounded-[10px] bg-[#b98a16] shadow-card"
            >
                <div className="bg-tertiary rounded-[10px] p-3 flex flex-col justify-center items-center gap-1">
                    <p>{title}</p>
                    <img 
                        src={icon} 
                        className="w-[40px]"
                    />
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = ({ language }) => {
    return (
        <>
            <motion.div
                variants={titleSlide(0.2)}
            >
                <p className={styles.subTitle}>Introduction</p>
                <h2 className={styles.sectionTitle}>{about[language].title}</h2>
            </motion.div>

            <motion.p 
                variants={fadeIn("", "tween", 0.5, 0)}
                dangerouslySetInnerHTML={{__html: about[language].content}}
                className={`${styles.paddingX} mt-3 text-secondary text-[16px] leading-[25px] text-justify`}
            />
            <div className="flex justify-center flex-wrap mt-10 gap-10 mx-auto">
                {competences.map((competence, index) => (
                    <CompetenceCard 
                        index={index}
                        title={competence[`title_${language}`]}
                        icon={competence.icon}
                    />
                ))}    
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")