// 메모리 누수의 경우
// 1. 불필요한 메모리 정보를 메모리상에서 계속 보존하여 비효율로 인한 자원상 문제 초래
// 2. 메모리가 할당은 되었지만 비할당 과정을 거치지 않아 메모리에 잔류

//불필요한 메모리 정보로 인하여 자원상 문제를 초래하는 경우
function study( value1, value2) {
    this.value1 = value1
    this.value2 = value2


    // 아래처럼 prototype 없이 바로 함수선언, 함수 네이밍 없이 어로우 펑션으로 정의 시 문제점
    // problem.func1  
    // 메모리 de allocation이 없어 메모리에 계속 올라가 잇음
    // 클로저 안에 또 다른 클로저를 호출하게 된다
    
    //this.prototype.func1 = () 
    this.func1 = () => {
        console.log
    }
} 

const problem = new study(undefined,undefined)

problem.func1()