import { motion } from 'framer-motion'
import { styles } from '../styles'

const SectionWrapper = (Component, id) => {
    function HOC(props) {
        return (
            <motion.section
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className={`${styles.paddingX} mt-5 z-100`}
            >
                <span id={id}>&nbsp;</span>
                <Component { ...props} />
            </motion.section>
        )
    }

    return HOC
}

export default SectionWrapper