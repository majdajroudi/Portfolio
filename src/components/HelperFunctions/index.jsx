export const transitionProperties = {
    duration : 0.4,
    type:"tween",
    ease: "anticipate"
}

export const pageTransitions = {
    initial : {
        x:"-100vw",
        scale: 1.2
    },
    in: {
        x: 0,
        scale: 1
    },
    out: {
        x:"100vw",
        scale: 0.7
      }
}