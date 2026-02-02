const fs = require("fs")
const{Transform}=require("stream")


const upper=new Transform({
  transform(chunk,encoding,cb){
    constmodifiedData=chunk.toString().toUpperCase();
    cb(null,modifiedData)
  }
})


const readStream=fs.createReadStream('./info.txt')
  
  
const writeStream=fs.createWriteStream('./infoutput.txt')