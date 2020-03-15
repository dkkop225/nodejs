//eventloop 자료구조

// QUEUE : Fist In First Out = FIFO
//

const queue = []
queue.push(1)
queue.push(2)
console.log(queue)

const r = queue.shift()
//shift : 큐의 첫번째 요소를 제거하고 반환함
console.log(r)

// stack 
// First In Last Out, Last In First Out - LIFO
const stack = []
stack.push(1)
stack.push(2)
console.log(stack)
var s = stack.pop()
//마지막 요소를 배열로부터 제거하고 리턴
console.log(s)