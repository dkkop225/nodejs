'use strict'

const obj = {
    title:'npde.js 올인원 패키지'
}
const newObj = {
    name : 'node.js 온라인 올인원'
}

//const ret = Object.assign({},obj, newObj)

// const ret = {
//     ...obj,
//     ...newObj
//     //-- 두개의 객체를 합쳐서 assign과 동일한 결과 가져옴
// }

const arr = [1,2,3]
const newArr = [4,5,6]

const ret = [
    ...arr, ...newArr
    //배열 spread는 이렇게 배열로 열어서
]

console.log(ret)
