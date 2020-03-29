'use strict'

const timeoutObj = setTimeout(()=>{
    console.log('first')
},0)
//TimerHandler - 해당하는 함수가 몇초뒤에 실행될건지 , 최소지연시간 , 최소 1초이상 지연하고 수행함, system 상태나 네트워크상태 등에 따라 1초이상 걸릴수 있음 말그대로 최소 지연시간임


//즉시 실행하는것
//setTimeOut과 setImmediate의 조건이 같을때 순서 보장될수 없음 , 그때그떄 다름
const immediateObj = setImmediate(()=>{
    console.log('second');
})
//setImmdiate


//특정 주기로 실행
const intervalObj = setInterval(()=>{
    console.log('third')
},1000)


/// 이벤트 클리어
clearTimeout(timeoutObj)
clearImmediate(immediateObj)
clearInterval(intervalObj)