import { motion } from 'framer-motion'

import { CubeCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

import { styles } from '../styles'
import { titleSlide } from '../utils/motions'

import { techs, technos } from '../constants/constants'

const Tech = ({ language }) => {
    return (
        <>
            <motion.div variants={titleSlide(0.2)}>
                <h2 className={styles.sectionTitle}>{techs[`title_${language}`]}<span className={styles.textOrange}>.</span></h2>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center">
                {Object.keys(technos).map((key) => (
                    <div 
                        className="w-[150px] h-[150px]"
                        key={key}
                    >
                        <CubeCanvas data={technos[key]} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "tech")
