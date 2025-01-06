//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. hint use setinterval


let value=0;

function updatecounter(){
    
    console.log(value);
    value++;
    setInterval(updatecounter,1000)
}

updatecounter(0)