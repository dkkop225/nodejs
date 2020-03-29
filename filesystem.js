'use strict'

const fs = require('fs')
const { promisify } = require('util') //비구조화 해서 사용햇음

//callback 함수를 promise로 바꾸는 과정
const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)

//data를 undifiend 가아니고 비어잇는걸로 초기화 하기위해
const writeAndRead = async (data = '') => {
    try {
        await write('test.txt',data)
        return (await read('test.txt'))
    } catch(e) {
        console.err(e)
    }
    
}

writeAndRead('something to write')
// //파일명, 인코딩(생략하면 utf-8 default)
// fs.readFile('test.txt','utf-8', (err,data)=> {
//     if(err) {
//         console.error(err)
//         return 
//     }
//     console.log(data)
// })

// const content = 'something to write'
// //파일경로, 데이터
// fs.writeFile('fast.txt', content,err => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log('success')

// })