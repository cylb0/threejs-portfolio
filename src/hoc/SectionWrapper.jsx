import { motion } from 'framer-motion'
import { styles } from '../styles'

const SectionWrapper = (Component, id) => {
    function HOC(props) {
        return (
            <motion.section
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
            >
                <span id={id}>&nbsp;</span>
                <Component { ...props} />
            </motion.section>
        )
    }

    return HOC
}

export default SectionWrapper