//자바스크립트는 객체지향이자 프로토타입 언어

//node.green
//ES2015 =ES6
//ES2016 = ES7
//ES2018 = ES8


//클래스는 한번만 생성 가능함, 요청이 들어올때마다 생성되는게 아님
// 환경변수처럼 한번 적용하고 또다시 읽을 필요가 없는 경우에 유용

'use strict'

class cacheManager {
    constructor(){
        //생성자
        //생성자는 async나 await같은걸 사용할수 없고 무조건 this로 받는다
        this.config = []
    }
}

//클래스 할당방법
const cacheManager = new cacheManager()