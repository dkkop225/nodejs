
'use strict'

class cacheManager {
    constructor(){
        this.config = []
    }

    addConfig(obj = {}) {
        this.config.push(obj)
    }
    getConfig () {
        return this.config
    }
}
//모듈화
module.exports = cacheManager