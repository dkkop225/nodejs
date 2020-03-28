'use strict'

class test {

    //기존함수
    fn(){
    }
    //static 메소드 - class를 생성하지 않고 class 내부에 바로 접근하여 함수를 실행할 수 있음
    // 생성자(constructor)에 접근하지 않고 바로 static 메소드를 호출하기 때문
    static call () {
        console.log('static method')
    }
}

//const Test = new Test()
//이렇게 클래스 생성해서 사용하는게 아니고
test.call()