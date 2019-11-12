var fs = require("fs");
var readLine = require("readline");

function readFileToArr(fReadName, cb) {
    let arr = [];
    let readObj = readLine.createInterface({
        input: fs.createReadStream(fReadName)
    });

    readObj.on('line', function (line) {
        arr.push(line);
    });
    readObj.on('close', function () {
        cb(arr);
    });
}

async function myReadFile (){
    let result1 = await new Promise((resolve, reject)=>{
        readFileToArr('1.txt', function (arr) {
            resolve(arr)
        });
    })
    let result2 = await new Promise((resolve, reject)=>{
        readFileToArr('2.txt', function (arr) {
            resolve(arr)
        });
    })
    let filesContents = [].concat(result1,result2)
    var set = new Set(filesContents);
    console.log('filesContents',set)
}

myReadFile();





