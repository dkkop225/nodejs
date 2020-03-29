'use strict'

//generator - 생성자 - 생성하는 함수 
// 기존의 함수와 다름
// 제네레이터는 yield라는 특별한 문법 사용
// 기존함수는 return을 사용해서 함수를 끝내고 반환하는것
//yield는 함수를 끝내지 않음
//generator는  arrow 펑션 사용불가

//선언
function* log(){
    console.log(0,yield)
    console.log(1,yield)
    console.log(2,yield)
} 

const gen = log()

//next = generator에서 사용하는 메소드
// 다음 라인으로 넘겨줌
// yield에 해당 값이 들어감
gen.next('zero')
gen.next('first')
gen.next('second')