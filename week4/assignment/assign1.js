//Create a command line interface that lets the user specify a file path 
// and the nodejs process counts the number of words inside it.


// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file
const fs = require('fs');
const { Command } = require('commander');
//The statement const { Command } = require('commander'); is used in Node.jsto import the Command class from the Commander.jslibrary
//const { Command }: This is an example of object destructuring in JavaScrip
const program = new Command();


program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');
//here name ,description,version provides the version,name,desscription of the cli(command line interface)

//here action determines the action to be performed on the greet function of command
program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile("a.txt", 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words=0;
        for(let i=0;i<data.length;i++){
            if(data[i]===" "){
                words++;
            }
        }
        console.log(`There are ${words +1} lines in ${file}`);
      }
    });
  });
///to run-> node assign1.js count /Onedrive/Desktop/Harkiratwebd/week4/assignment/a.txt
//file ki location di hai
program.parse();
// program.parse: This method processes the command-line arguments.

// const fs=require("fs")

// function main(filename){
//   fs.readFile("a.txt","utf-8",function(err,data){
//     let total=0;
//     console.log(process.argv)
//     for(let i=0;i<data.length;i++){
//         if(data[i]===" "){
//             total++;
//         }
//     }
//     console.log(total+1);
//   })
// }

// main("a.txt")