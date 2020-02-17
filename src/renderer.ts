import * as fs from 'fs'

console.log('Hello from renderer');

let dir = process.cwd()
let stat = fs.statSync(dir)
console.log(dir, "atime", stat.atimeMs)

// function plop() {
//     console.log("plop !!!!")
// }
// setInterval(plop, 3000)
