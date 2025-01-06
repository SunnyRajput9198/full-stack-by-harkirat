//try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
let value=0;

function updatecounter(){
    
    console.log(value);
    value++;
}

setInterval(updatecounter,1000)