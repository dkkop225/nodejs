//npm install co

//co 설치
// generator를 더 효율적으로 사용할 수 있도록 하는 패키지

const co = require('co')

co(function *(){
    const a =Promise.resolve(1)
    const b =Promise.resolve(2)
    const c =Promise.resolve(3)
    const res= yield[a,b,c]
    console.log(res)
})