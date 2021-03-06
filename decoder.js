'use strict'

const alphabet = '0123456789abcdef'

/**
 * Rotates an array left or right n number of steps
 *
 * @param {Array} array
 * @param {Number} steps
 */
const rotate = (array, steps) => {
    steps = (steps || 0) % array.length
    steps += (steps < 0) ? array.length : 0
    array.push.apply(array, array.splice(0, steps))
    return array
}

/**
 * Decodes your unique key based on your decryption key
 *
 * @param {String} uniqueKey
 * @param {String} decryptionKey
 */
const decode = (uniqueKey, decryptionKey = '1L 1L 2L 3R 5L 8R 13L') => {
    let output = ''
    let innerWheel = alphabet.split('')
    let outerWheel = alphabet.split('')
    uniqueKey = uniqueKey.trim().toLowerCase().split('')
    decryptionKey = /((\d+[LR] ?){6}\d+[LR])/gi.exec(decryptionKey)[0]
    decryptionKey = decryptionKey.trim().toLowerCase().split(' ').map(n => {
        return n = n[n.length - 1] === 'r' ? -parseInt(n) : parseInt(n)
    })
    for (let i in uniqueKey) {
        innerWheel = rotate(innerWheel, decryptionKey[i])
        output += '' + innerWheel[outerWheel.indexOf(uniqueKey[i])]
    }
    return output
}

module.exports = decode
