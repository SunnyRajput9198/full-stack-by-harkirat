//asssign 1
function sum(value1,value2){
    return value1+value2;
}

console.log(sum('4','8'))

//assign 2
function canvote(value){
    if(value>=18){
        return true
    }
    return false
}

console.log(canvote(19))

//aasign 3 
//even or odd

function even(value){
if(value%2==0){
console.log(`${value} is even`)
}else{
console.log(`${value} is odd`)
}
}

console.log(even(19))

//assign 4
//Write a function called sum that finds the sum from 1 to a number
function add(value){
    let num=0;
    let i=1;
    while(i<=value){
     num+=i;
     i++;
    }
    return num
}

console.log(add(5))