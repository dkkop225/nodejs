'use strict'

//static fatctory method 패턴
// constructor를 버림(사용하지 않는게 아니고 생성자로서의 기능을 버리고 생성자를 static메소드로 구성해서 비동기를 풀어내는 방식 ) 
class DbManager {
    constructor() {
     
     //   this.init = init  // Pending 상태로 가지고 있는 promise
        //promise Cache 
        // 한번 호출이 되어서 resolve가 된 promise는 cache화가 되어 ram에 해당하는 결과값이 저장이 되어서 두번이상 호출하지 않는다
    }

    static async  BUILD (settings){
        //생성만 하고 기능을 넘김
        const config = await this.init(settings)
        // 수행하고자 하는 모든 비동기 작업 여기서 수행하고 결과들을 리턴하면됨
        return new DataBaseMamger(config)
    }
    query () {
        // QUERY('') Agnostic   구현체마다 다름
    }

    async init() {
        //Pending 상태로 promise로 리턴
        // 최초 1회만 실행됨 보장 promise cache
    }
    async newMember () {
       
    }

    async deleteMember (){
        
    }
}


// static - 정적 - 변하지 않는다 - 클래스에서 static이란 생성자가 필요가 없다 변하는게 없으므로 , 독립적인 함수이므로
const manager = DataBaseMamger.BUILD(settings)