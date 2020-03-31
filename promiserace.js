//promise.race 는 모든게 끝날때까지 기다리는게 아니라 가장 먼저 실행되는게 리턴

'use strict'

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(2000),2000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(),0)
})
const res = Promise.race([promise1,promise2]).then(value=>console.log(value))

if(res === undefined) {
    
}