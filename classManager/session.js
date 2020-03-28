'use strict'

//cache.js 위치 및 선언
const cachManager = require('./cache')

// cacheManager extends
class sessionManager extends cachManager{
}

const SessionManager = new sessionManager();
//cache.js를 extends 하여서 addConfig 바로 사용 가능 
SessionManager.addConfig({
    token:'ran'

})
const config = SessionManager.getConfig()
console.log(config)
