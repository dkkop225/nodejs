//promise.all
'use strict'
//즉시 실행
const promise1 = new Promise((resolve,reject)=> resolve('즉시호출'))
//3초 뒤 실행
const promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=> resolve('3초뒤에 호출'),3000)
})

//then - 다 실행되었을 시 
Promise.all([promise1,promise2]).then(values=>console.log(values))

//promise all은 여러가지 promise에서 모든 작업이완료됨을 보장받을 수 있는 것