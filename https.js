//http s
//hyper text protocol secure

//모든 데이터 교류 과정중에 ssl프로토콜이 추가되어 해당하는 모든 데이터 트랜잭션들 ,처리과정들이 암호화되어 안전하게 처리된다

'use strict'

const https = require('https')

//옵션 정보
const options = {
    hostname:'google.com'
    , port : 443 // 기본적으로 443 명시 안해줘도 디폴트로 443
    , path: '/login' // hostname과 연결되어 나타날 경로
    , method: 'GET'//C R U D  (POST GET PUT DELETE)
}
//
const req = https.request(options, res => {
    console.log(`statusCode : ${res.statusCode}`)
    res.on('data',d =>{
        process.stdout.write(e)
    })

    req.on('error',e => {
        console.log(error)
    })
})

//리퀘스트 종료 메모리 누수 방지등을 위하여
req.end()