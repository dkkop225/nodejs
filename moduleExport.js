'use strict'

function edit(){}
function write(){}

class update{

}

// module.exports =  {
//     edit,
//     write
// }


//module.exports = write
//module.exports = update

module.exports = {
    id:'',
    token:'',
    fn:() => {
        console.log('this is function')
    }
}

// 모듈을 다른 파일이나 다른 노드에서 사용할 수 있도록 모듈을 export 하는 것
//모듈은 단순 함수만 가능한게 아니고 클래스, 변수들 등등도 가능
// 단일로도 가능하고 객체로도 가능