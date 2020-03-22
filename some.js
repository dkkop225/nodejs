'use strict'

const arr = [1, 2, 0, 1, 2]

const res = arr.some(key => key < 0)
console.log(res)


// some 은 조건에 해당하는게 1개이상 있을시에 true  반환
