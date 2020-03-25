'use strict'

function add (var1, var2) {
    return var1 + var2
}
// 이거를 어로우펑션으로 바꾸면

// const add =  (var1, var2) => var1 + var2
// console.log(add(1,2))


API.prototype.get = function(resource){
    var self = this;
    return new Promise(function(resolve,reject){
        http.get(self.uri + resource,function(data){
            resource(data);
        });
    });
};

// 이거를 어로우평선으로 바꾸면


API.prototype.get = (resource)=>{
     new Promise((resolve,reject) => {
        http.get(this.uri + resource,(data) =>{
            resource(data);
        });
    });
};
