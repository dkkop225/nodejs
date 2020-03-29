// 특정이벤트가 발생했을때 일괄적으로 로직, 특정 코드들을 실행할수 있도록 구조적으로 작성하는 방법

'use strict'

const EventEmitter = require('events')

class ChatManager extends EventEmitter{}

const chatManager = new ChatManager()

//.on 키워드 - 특정한 이벤트가 발생했을 때 임의의 이벤트에 대해서 선언하는 것
chatManager.on("join",()=> {
    console.log("new user joined")
})

// 선언된 이벤트 실행

chatManager.emit("join")