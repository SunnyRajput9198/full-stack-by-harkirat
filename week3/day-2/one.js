console.log(document)

//query selector--selct one element of that tag
console.log(document.querySelector("button").innerHTML)

function addtodo(){
    const inputel=document.querySelector("input");
    const value=inputel.value
    console.log(value)

}

//queryselectorall--select all element of that tag

console.log(document.querySelectorAll("h4"))

//getlementbyid 

console.log(document.getElementById("bd"))
//to acces id by queryselector we use #
const inputid=document.querySelector("#bd");
console.log(inputid)

//to acces class by queryselector we use .
const classin=document.querySelector(".toto");
console.log(classin)



const ctr=document.querySelectorAll("h4")[1];
function stopwatch(){
    console.log(ctr);

}
setInterval(stopwatch,1500)

let el=0
function stopwatch(){
    let ctr2=document.querySelectorAll("h4")[0].innerHTML=el;
    console.log(ctr2);
    el++;

}
setInterval(stopwatch,1000)
