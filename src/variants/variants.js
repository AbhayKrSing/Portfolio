export const textvariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export const parentvariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}


export const childvariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2
        },
    }
}