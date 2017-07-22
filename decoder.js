const alphabet = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

/**
 * Rotates an array left or right n number of steps
 *
 * @param {Array} array
 * @param {Number} steps
 */
const rotate = (array, steps) => {
    steps = (steps || 0) % array.length
    steps += (steps < 0) ? array.length : 0
    let removed = array.splice(0, steps)
    array.push.apply(array, removed)
    return array
}

/**
 * Decodes your unique key based on your decryption key
 *
 * @param {string} uniqueKey
 * @param {string} decryptionKey
 */
const decode = (uniqueKey, decryptionKey = '1L 1L 2L 3R 5L 8R 13L') => {
    let output = ''
    let innerWheel = alphabet.slice()
    let outerWheel = alphabet.slice()
    uniqueKey = uniqueKey.trim().toLowerCase().split('')
    decryptionKey = decryptionKey.trim().toLowerCase().split(' ').map(n => {
        return n = n[n.length - 1] === 'r' ? -parseInt(n) : parseInt(n)
    })
    for (let i in uniqueKey) {
        innerWheel = rotate(inner, decryptionKey[i])
        output += '' + innerWheel[outerWheel.indexOf(uniqueKey[i])]
    }
    return output
}

