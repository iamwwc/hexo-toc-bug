var toc = require("./toc")
var newtoc = require("./newtoc")
var fs = require("fs")
var path = require("path")
fs.readFileAsync = filename => {
    return new Promise(function(resolve,reject){
        fs.readFile(filename,(err, data) => {
            if (err){
                reject(err)
            }
            resolve(data)
        })
    })
}


var relative = path.join(__dirname,"toc.txt")
var dst = path.join(__dirname,"result.html")
fs.readFileAsync(relative).then(d => {
    // var result = toc(d)
    var result = newtoc(d)
    fs.writeFile(dst,result,err => {
        if(err){
            return new Promise(function(resolve,reject){
                reject(err)
            })
        }
        
    })
}).catch(e => {
    console.log(e)
})