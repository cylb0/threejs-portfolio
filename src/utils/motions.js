export const title = {
    visible: {
        y: 0, 
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2
        }
    },
    hidden: {
        y: -50, 
        opacity: 0
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