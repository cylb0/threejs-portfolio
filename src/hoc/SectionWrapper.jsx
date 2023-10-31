import { motion } from 'framer-motion'

const SectionWrapper = (Component, id) => {
    function HOC(props) {
        return (
            <motion.section
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-3"
            >
                <span id={id}></span>
                <Component { ...props} />
            </motion.section>
        )
    }

    return HOC
}

export default SectionWrapper