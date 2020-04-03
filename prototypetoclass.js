'use strict'

class fullStack {
    //constructor :해당 함수 초기화
    // async, await 키워드를 사용할 수 없다
    constructor(backend, frontend) {
        this.backend = backend
        this.frontend = frontend
    }

    getBackend () {
        return this.backend
    }

    getFrontend() {
        return this.frontend
    }

    setBackend(backend){
        this.backend = backend
    }
    setFrontend() {
        this.frontend = this.frontend
    }
}

const FullStack =  new fullStack('java','javascript')
FullStack.getFrontend()
FullStack.getBackend()