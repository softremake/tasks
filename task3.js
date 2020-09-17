// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const compress = (s) => {
    let count = 0
    let prev = ''
    let result = ''
    let idx = 0
    for(const ch of s) {
        if(ch !== prev) {
            if(count > 1) {
                result += prev + count
            } else {
                result += prev
            }
            prev = ch
            if(idx === s.length - 1) {
                result += ch
            }
            count = 1
        } else {
            count++
            if(idx === s.length - 1) {
                if(count > 1) {
                    result += prev + count
                } else {
                    result += prev
                }
            }
        }
        idx++
    }
    return result
}

function solution(S, K) {
    // K can be 0
    if(K===0) return compress(S).length

    let minimal = null
    let compressed = ''

    for(let start=0; start < S.length - K; start++) {
        const head = S.substring(0, start)
        const tail = S.substr(start+K, S.length)
        compressed = compress(head+tail)

        if(!minimal || compressed.length < minimal.length)  minimal = compressed
    }

    return minimal.length
}

// console.log('min', solution('ABBBCCDDCCC', 2))
// console.log('min', solution('ABCDDDEFG', 2))
console.log('min', solution('ABBBCCDDCCC', 3))
