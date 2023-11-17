import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { about, competences } from '../constants/constants'

import { SectionWrapper } from '../hoc'
import { titleSlide, fadeIn } from '../utils/motions'

const CompetenceCard = ({ index, title, icon }) => {

    const options = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          500,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.    
    }

    return (
        <Tilt 
            options={options}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                variants={fadeIn("right", "spring", 1 * index, 0.8)}
                className="w-full h-[180px] p-px rounded-[10px] bg-[#b98a16] shadow-card hover:bg-white"
            >
                <div className="h-full bg-primary rounded-[10px] p-3 flex flex-col justify-center items-center gap-1">
                    <p className={`${styles.textOrange} font-black`}>{title}</p>
                    <img 
                        src={icon}
                        alt={icon + ' ' + title} 
                        className="w-[40px] mt-5"
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
                <h2 className={styles.sectionTitle}>{about[language].title}<span className={styles.textOrange}>.</span></h2>
            </motion.div>

            <motion.p 
                variants={fadeIn("", "tween", 0.5, 0)}
                dangerouslySetInnerHTML={{__html: about[language].content}}
                className={`${styles.paddingX} mt-3 text-secondary text-[16px] max-w-4xl leading-[25px] text-justify`}
            />
            <div className="flex justify-center flex-wrap my-10 gap-10 mx-auto">
                {competences.map((competence, index) => (
                    <CompetenceCard
                        key={index} 
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