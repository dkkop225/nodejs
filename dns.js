//dns - ip를 사람이 읽을수 있는 주소로 변경해주는 것

'use strict'

const dns = require('dns') 

dns.lookup('test.com',(err,address,family)=> {
    console.log(`address:${address},${family}`)

    // family => ip 버전 , 4면 ipV4 사용중인것
})

dns.resolve4('archive.org',(err,addresses)=>{
    if(err) throw err

    const res= JSON.stringify(addresses)
    console.log(res)

    addresses.forEach(a=> {
        dns.reverse(a,(err,hostnames)=> {
            if(err) throw err
            console.log(`reverse for ${a}l ${JSON.stringify(hostnames)}`)
        })
    })
})