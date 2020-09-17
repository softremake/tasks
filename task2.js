function solution(S) {
    const arr = S.split('')
    const hasA = arr.indexOf('a') !== -1
    if (!hasA) return 0

    const len = S.length

    let balancedCount = 0

    for (let p1 = 0; p1 < len - 2; p1++) {
        const s1 = S.substring(0, p1 + 1)
        for (let p2 = 0; p2 < len - s1.length - 1; p2++) {
            const s2 = S.substring(s1.length, s1.length + p2 + 1)
            const s3 = S.substring(s1.length + s2.length, len)

            // is a balanced in all parts?
            const count1 = s1.split("a").length-1
            const count2 = s2.split("a").length-1
            const count3 = s3.split("a").length-1

            if(count1 && count2 && count3 && (count1 == count2 == count3)) {
                balancedCount++
            }
        }
    }

    return balancedCount
}

console.log(solution('babaa'))
