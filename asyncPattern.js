//constructor 내부에서는 비동기 함수를 호출할 수 없다
// 왜냐? 컨서트럭터는 최초 한번만 호출이 되고 콜백도 없기 때문에


'use strict'

class sample {
    *gen() {
        let cnt = 0
        yield cnt++
    }

    //^^Computed Property
    //계산되어지는 속성
    // 명시적으로 함수명을 선언해주는게 아니고 호출되는 시점에서 다이나믹하게 그때그떄 다르게 생성자(generator) 정의 가능
    //프로퍼티로서 
    // 
    *[Symbol.iterator] () {
        let cnt = 0
        yield cnt++
    }
}

const fn = new sample()
const gn = Sample.gen()

console.log(gen.next())
console.log(gen.next())


//^^
console.log(Array.from(Sample))