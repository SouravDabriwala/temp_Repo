//x------------------------------------x

// const amount = 12

// // if(amount<10){
// //    console.log("Small")
// // } else{
// //     console.log("large")
// // }
// console.log(process)
// console.log(`Hello ${amount}`)

//x--------------------------------------x

//Modules

// const sayHi = (name)=>{
//     console.log(`${name}`)
// // }

// const hello = require('./index')
// const sayHi = require('./utils')
// require("./mind-greande") //importing the file invokes the code inside it
// console.log(hello)

// sayHi("sourav")
// sayHi(hello)

//Built-in Modules
// //OS Module
// const { log } = require('console')
// const os = require('os')

// //info about current user
// const user= os.userInfo()
// // log(user)

// //method returns the system uptime in seconds
// log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }

//log(currentOS)

//Path Module
// const { log } = require('console')
// const path = require('path')

// // log(path.sep) -> \

// const filePath = path.join('/content','subfolder','test.txt')
// // log(filePath) -> \content\subfolder\test.txt

// const base = path.basename(filePath)
// // log(base) -> test.txt

// const absolute= path.resolve(__dirname,'content','subfolder','test.txt')
// log(absolute)

// //FS module
// const { log} = require('console')
// const fs = require('fs')

// //Synchronously Blocking
// const first = fs.readFileSync('./content/first.txt','utf-8')
// // log(first)

// // fs.writeFileSync('./content/result.txt',`Here is the result -> ${first}`)
// fs.writeFileSync(
//                 './content/result.txt',  //path
//                `Here is the result -> ${first}`,  //content
//                 {flag:'a'}  //flag a for append
//                )

//Asychronously NonBlocking
// fs.readFile('./content/first.txt','utf-8',(error,result)=>{
//     if(error){
//         log(error)
//         return
//     }
//     const first = result
//     fs.readFile('./content/second.txt','utf-8',(err,res)=>{
//          if(err){
//             log(err)
//             return
//          }
//     const second = res
//     fs.writeFile('./content/result.txt',`Here is the result ${first} , ${second}`,(err,res)=>{
//         if(err){
//             log(err)
//             return
//         }
//         log(res)
//     })
//     })

// })

// //HTTP module
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if(req.url === '/'){
//     res.end("Home Page")
//   }
//   else if(req.url === '/about'){
//     res.end("About page")
//   }
//   else{
//    res.end(
//     `<h1>OOps!</h1>  
//      <a href='/'>Go to home</a>
//     `
//   )
    
//    }
 
// });

// server.listen(3000);

//x------------------------------x-------------------------------


//NPM

