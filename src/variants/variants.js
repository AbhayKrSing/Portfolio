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
export const project_childvariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        },
    }
}

export function slideIn(direction) {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2
            },
        }
    }
    return variants;
}