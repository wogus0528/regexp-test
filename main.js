const str = `
010-1234-5678
sbs6363@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog
abbcccdddd
`

const regexp = new RegExp('the','')
console.log(str.match(regexp))

// ========

// const regexp = /the/
//  위에 regexp와 같다.
