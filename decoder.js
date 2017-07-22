const wheel = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

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
const decode = (uniqueKey, decryptionKey) => {
    let output = ''
    let inner = wheel.slice()
    let outer = wheel.slice()
    uniqueKey = uniqueKey.trim().toLowerCase().split('')
    decryptionKey = decryptionKey.trim().toLowerCase().split(' ').map(n => {
        return n = n[n.length - 1] === 'r' ? -parseInt(n) : parseInt(n)
    })
    for (let i in uniqueKey) {
        inner = rotate(inner, decryptionKey[i])
        output += '' + inner[outer.indexOf(uniqueKey[i])]
    }
    return output
}

module.exports = decode
