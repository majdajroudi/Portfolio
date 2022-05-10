export const transitionProperties = {
    duration: 0.8,
    type: "tween",
    ease: "anticipate"
}

export const pageTransitions = {
    initial: {
        x: "-100vw",
        scale: 0.1
    },
    in: {
        x: 0,
        scale: 1
    },
    out: {
        x: "100vw",
        scale: 0.1
    }
}