const ADJECTIVES = [
    'living',
    'stupendous',
    'subsequent',
    'wary',
    'testy',
    'loving',
    'curious'
]

const OBJECTS = [
    'toothbrush',
    'sponge',
    'video games',
    'drawer',
    'seat belt',
    'bowl',
    'popcorn'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}