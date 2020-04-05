'use strict'

const arr = ['pdf','html','html','gif','gif','gif']

const res= arr.reduce((cnt,fileType)=> {
    cnt[fileType] = (cnt[fileType] || 0) + 1 // 처음 나올때 undefined를 반환하지 말고 0을 반환하라고 해줌
    return cnt

},{}) //끝에 오는건 반환타입을 초기화 하는 것
console.log(res)