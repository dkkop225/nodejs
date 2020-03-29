'use strict'

//비구조화
//비구조화 할수 있는것 - 모듈, 어레이 , 객체 등등

const obj = {
    title:'nodejs'
    , value:'allinone'
}

//최신 
const {title,value} = obj
//이게 비구조화
//예전
//const title = obj.title
//const value = obj.value

//console.log(title,value)

const arr = [0,1,2]
const [,a,b] = arr
console.log(a,b)