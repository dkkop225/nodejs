'use strict'

const http = require('http')

//서버 생성 및 선언
const server = http.createServer((req,res)=> {
    //어떤 요청에대한 결과를 보낼때 200을 보내면 해당  요청이 정상적으로 작동되어서 정상적인 결과값을 리턴한다
    res.statusCode = 200
    //해당하는 값이 해당하는 데이터로 어떤것을 보내느냐를 명시적으로 선언
    //html 문서를 리턴한다라고 선언한것임
    res.setHeader('Content-Type','text/html')
    
    //response 종료
    res.end('<div>Hello World</div>')
})

const port = process.env.PORT
//요청에 대해서 받는 메소드
server.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})
    