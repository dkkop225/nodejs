'use strict'

const test = new Set()

test.add(1)
test.add(1)
test.add(2)
test.add(2)
test.add(3)

for(const item of test) {
    console.log(item)
}

//set 자료형은 중복데이터 제거


const ret = test.has(2)
console.log(ret)

//has는 자료가 존재하는지 boolean 리턴