import { motion } from 'framer-motion'
import { hero, iconLinks } from '../constants/constants';
import { styles } from '../styles'
import { StarsCanvas } from './canvas';
import { xwing } from '../assets'

export default function Hero({ language }) {

    return (
        <section className="relative w-full h-screen mx-auto">
            <div className="absolute sm:px-16 px-6 inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center">
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-transparent via-[#b98a16] to-transparent' />
                </div>
                <div className="z-40">
                    <h1 className={`${styles.heroTitle}`}>
                        {hero[language].title}
                        <span className="text-[#b98a16]">&nbsp;Morgan</span>
                    </h1>
                    <p className={`${styles.heroText} mb-5`}>{hero[language].subText}</p>
                    <div className="flex justify-start items-center gap-3 ms-10">
                        {Object.keys(iconLinks).map((key) => (
                            <a href={iconLinks[key].link} key={key}>
                                <img src={iconLinks[key].icon} alt={`${key} icon`} className="w-[30px]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <StarsCanvas style={{zIndex: '-1'}}/>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about" className='w-[35px] h-[65px]'>
                    <motion.div
                        animate={{
                            y: [0, 30, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                        className="mb-1"
                    >
                        <img
                            className="scale-y-[-1]" 
                            src={xwing}
                        />
                    </motion.div>
                </a>
            </div>
        </section>
    )
}