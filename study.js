// front 개발과 node 개발에서의 차이점

//window 라는 객체는 노드에서는 존재하지 않음

//node는 import가 아니고 require 를 사용해서 패키지나 모듈 정의

const  //특정한 상수, 변하지 않는 값 선언할때 사용
let  // 특정 scope안에서만 작동
//ex)
if(true){
    let global
    // global 변수는 해당 범위안(if문 안에서만 작동 )
}
var // 파일 전체에서 작동