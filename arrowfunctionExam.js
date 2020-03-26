//Curried Function
// - 두가지 함수를 합성해서 호출 . 합성함수
// f(x) = x+ 1
// g(x) = x^2
// h(x) = f(g(x))

// arrow 두번은 closure 
// price를 파라미터로 받는 내부 클로저 함수 선언 의미

//https://babeljs.io/repl - es6 를 es 5로 변환해줌
const getDiscount = rate => price => rate * price
//const getTenpercentOff = getDiscount(0.1)(10000)
getTenpercentOff(price)
//=============
// var getDiscount = function getDiscount(rate){
//     return function(price) {
//         return rate * price;
//     }
// }