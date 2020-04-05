//singleton pattern : 단 한번만 생성됨을 보장하는 패턴
//환경 설정파일이나 변수를 읽어올때 싱글턴 패턴을 안쓰면 계속 읽어와서 오버헤드발생

'use strict'

class CacheManager {
    constructor() {
        if(!CacheManager.instance) {
            //인스턴스가 존재하지 않을때
            //  내부캐시이기 때문에 외부에서 접그할 필요 없으므로 언더스코프 _ 붙임
            this._cache = []
            CacheManager.instance = this
        }
        return CacheManager.instance
    }
}
const instance = new CacheManager()

//싱글턴 클래스를 프리즈
Object.freeze(instance)