// every

// 배열이 있을때
// 해당 배열내용이 어떠한 조건을 모두다 만족할 때

'use strict'

const arr = [2,3,4]
// 조건 : 1보다 큼

const isBiggerThenOne = arr.every(key => key > 1)

console.log(isBiggerThenOne);

