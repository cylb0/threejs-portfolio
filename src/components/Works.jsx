import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { fadeIn, titleSlide } from '../utils/motions'
import { styles } from '../styles'
import { github } from '../assets'

import { projects, works } from '../constants/constants'
import { SectionWrapper } from '../hoc'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import { IsMobileContext } from '../contexts/isMobileContext'

const ProjectCard = ({ index, name, description, download, download_text, tags, screenshot, link, link_github }) => {
    
    const renderTags = () => {
        const tagSpans = []
        for (const cat in tags) {
            const color = cat === "front" ? "green" : "red"

            tags[cat].map(tag => {
                tagSpans.push(
                    <span key={tag} style={{ color: color}} className="text-[14px]">
                        {tag}
                    </span>
                )
            })
        }
        return tagSpans
    }

    return (
        <Tilt
            options={{
                max: 25,
                speed: 500
            }}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                variants={fadeIn("left", "spring", 1 * index, 0.8)}
                className="w-full p-px rounded-[10px] bg-[#b98a16] shadow-card hover:bg-white"
            >
                <div className="h-full bg-primary rounded-[10px] p-3 flex flex-col justify-center items-center gap-1">
                    <div className="flex justify-between">
                        <h3 className={`${styles.textOrange} text-[20px]`}>{name}<span className={styles.textWhite}>.</span></h3>
                        {link_github && 
                            <a href={link_github}>
                                <img src={github} alt="github icon" className="ms-5 w-[25px] h-[25px] brightness-50 hover:brightness-100" />
                            </a>
                        }
                    </div>
                    <p className="text-[14px]">{description}</p>
                    {
                        download !== null && download_text !== null && 
                        <a 
                            className="mt-2 text-[12px] hover:text-[#b98a16] hover:cursor-pointer" 
                            href={download}
                            download={download}>{download_text}</a>
                    }
                    {
                        screenshot !== null && <a href={link}>
                            <img className={`mt-5 p-1 ${link !== null ? "hover:border-2 hover:border-[#b98a16] hover:scale-105" : ""}  rounded-lg`} src={screenshot} alt={name + ' screenshot'}/>
                        </a>
                    }
                    <p>
                    {renderTags().map((tag, index) => (
                        <span key={index}>
                        {tag}
                        {index < renderTags().length - 1 ? ' ' : ''}
                        </span>
                    ))
                    }
                    </p>
                </div>

            </motion.div>
            
        </Tilt>
    )
}

const Works = () => {
    const language = useContext(LanguageContext)
    const isMobile = useContext(IsMobileContext)

    return (
        <>
            <motion.div
                variants={titleSlide(0.2)}
            >
                <p className={styles.subTitle}>{works[language].subtitle}</p>
                <h2 className={styles.sectionTitle}>{works[language].title}<span className={styles.textOrange}>.</span></h2>
            </motion.div>

            <div className="flex justify-center flex-wrap my-10 gap-10 mx-auto">
                {projects.map((project, index) => (
                    /**!(isMobile && !project.mobile) &&*/ <ProjectCard 
                        key={index}
                        index={index}
                        name={project.name}
                        description={project[`description_${language}`]}
                        download={project.download}
                        download_text={project[`download_${language}`]}
                        tags={project.tags}
                        screenshot={project.screenshot}
                        link={project.link}
                        link_github={project.link_github}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "work")