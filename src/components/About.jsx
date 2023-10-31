import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { about } from '../constants/constants'

import { SectionWrapper } from '../hoc'
import { text, title } from '../utils/motions'

const About = ({ language }) => {
    return (
        <>
            <motion.div
                variants={title}
            >
                <p>Introduction</p>
                <h2 className={styles.sectionTitle}>{about[language].title}</h2>
            </motion.div>

            <motion.p 
                variants={text}
                dangerouslySetInnerHTML={{__html: about[language].content}}
                className={`${styles.paddingX} mt-3 text-secondary text-[16px] leading-[25px] text-justify`}
            />
        </>
    )
}

export default SectionWrapper(About, "about")