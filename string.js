'use strict'

//template String은 string 뿐 아니라 여러타입 가능하지만 
//string은 문자열이나 문자만
//별도 선언을 안해줘도 된다

let string = 'node.js 올인원 패키지'

let isStartWith = string.startsWith('n')
//startsWith - 해당 문자로 시작하는지

//let isIncludes = string.includes('올인원')
let isIncludes = string.includes('..')
//해당하는 문자열을 포함하는지

let isEndWith = string.endsWith('지')
//해당 문자로 끝나는지

const checkIfContains= () => {
    if((isStartWith || isIncludes) && isEndWith){
        return true
    }
    // if(isStartWith && isIncludes && isEndWith){
    //     return true
    // }
}


const ret = checkIfContains()
console.log(checkIfContains())
