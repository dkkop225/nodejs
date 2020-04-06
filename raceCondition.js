//경쟁상태
//두개이상의 인풋(대용량 인풋)
'use strict'

[Promise1,Promise2,Promise3].map(item=>{
    //맵 안에서 promise들은 비동기 적으로 실행됨
    // 따라서 어떤함수가  먼저 완료되는지 명확하지 않고
    // 비동기코드의 순서를 보장하지 않음
    //맵 안에서는 비동기 코드를 사용해선 안된다
    // 맵 펑션 안에서 실행되는 함수는 새로운 클로저를 생성하기 때문에
    //맵 안에 async 등 절대 금지 
})


// ->

const arr = [Pronise1, Promise2]
for (const item of arr) {
    //비동기 코드 가능
}

//  forEach또한 비동기 코드 불가능
arr.forEach((item)=> {

})