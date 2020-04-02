'use strict'
//prototype
//기존의 객체와 함수를 바탕으로 새로운 클래스를 만드는 , 새로운 함수를 만드는데 있어서 편리하게 접근할수 있는, 기존으 ㅣ 것을 활용할수 있는 틀을 제공

function fullStack (backend, frontend) {
    this.backend =backend
    this.frontend = frontend

    fullStack.prototype.getBackend = () => this.backend
    fullStack.prototype.setBackEnd = () => this.backend = backend


    fullStack.prototype.getFrontend = () => this.frontend
    fullStack.prototype.setFrontend = () => this.frontend = frontend

    //함수 내부에 함수로 선언되어있음 -> 클로저
    // 클로저 : 해당하는 함수가 함수 외부에 있는 변수에 대하여 접근 가능
    //arrow function은 this 바인딩 불가
}

const FullStack = new fullStack('javascript','javascript')
FullStack.getBackend()
FullStack.getFrontend()