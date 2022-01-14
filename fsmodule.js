const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err,data)=>{
//     console.log(err,data);
// })
// console.log('finished');

// const a = fs.readFileSync('file.txt');
// console.log(a)
// console.log(a.toString())
// console.log('Finished')


// fs.writeFile('file.txt',"added to file",()=>{
//     console.log("written")
// });
// console.log("finished")


fs.writeFileSync('file.txt',"added to file");
console.log("finished");

