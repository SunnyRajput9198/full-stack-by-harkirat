//synchoronus code is a code which is executed line by line,in the order it is written
// ex->const content2=fs.readFileSync("b.txt","utf-8")//synchroniously example

//  I/O haevy operation ->it is operation which involves a lot of data transfer bw the program
//  ex->reading a file,starting a clock,http request

//reading a file
//asynchnoronous is that all function sath me start ho jaege jese jese complete hote rhege execute hote rhege


const fs = require("fs");

function read(err, data) {
  //err is error
  console.log(data);
}
fs.readFile("a.txt", "utf-8", read); //asynchroniously
fs.readFile("b.txt", "utf-8", read); //asynchroniously

//code written in fs module
// function readFile(filepath,encoding,op){
//     //first->read file
//     //then->op("error","hi there")
// }
console.log("done!");
