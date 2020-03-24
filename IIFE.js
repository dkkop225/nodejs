//즉시 실행 함수
// 정의되자마자 즉시 실행되는 자바스크립트 함수
// (function(){
//     var lang = 'js';
// })();
//console.log(lang); // 접근불가함으로 오류남
//마지막에 ();로 묶는거  --이게 함수를 즉시 실행한다는 뜻
 // function에 이름이 업는 함수 : 익명함수
// 전역스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할수 있을 뿐 아니라 IIFE안으로 다른 변수들이 접근하는 것을 막을수 있는 방법


//IIFE 함수는 외부에서 접근불가

var r= (function(){
    var lang = 'js';
    return lang
})();
console.log(r)

// 이렇게 변수로 선언해주면 실행 결과만 리턴 가능