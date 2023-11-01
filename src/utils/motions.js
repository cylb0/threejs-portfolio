export const titleSlide = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0
        },
        visible: {
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.75,
                delay: delay
            }
        }
    }
}

export const text = {
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 2
        }
    },
    hidden: {
        opacity: 0
    }
}

export const fadeIn = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    }
}