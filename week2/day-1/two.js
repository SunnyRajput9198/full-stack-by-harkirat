
//http://latentflip.com/loupe/?code=!!! for visualization
console.log("hi")

function print(){
    console.log("hello")
}


//->i/o bound task-== I/0 bound task are operation that are limited by the system i/o capabalities
setTimeout(print,4000)
// setInterval(print,4000);

console.log("kese ho")


//->cpu bound task=== CPU bound task are task that are limited by the speed and power of cpu ex loop
let c=0;
for(let i=0;i<1000000;i++){
    c=+i;
}
console.log(c)

console.log("high operation task performed")
//functionaL argument-> passing a func to another func as an argument