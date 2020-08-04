# nodeJS Cheat Sheet

This document will be updated with useful Node syntax that i learn throught out my learning (working hopefully) journey!
Feel free to consult it and propose your recommendations as well.

## Installation 

```https://nodejs.org/en/download/```

## Global Object

<pre>setTimeout(() =>{

console.log("in this interval");
},3000);
</pre>

<pre>
console.log(__dirname);
console.log(__filename);
</pre>

## Export modules

One file can have:

```const people =["Paulo","John","Ala"];```
```const ages =["28","19","21"];```
```module.exports = { people, age};```

Other file:

```const xyz = require(./people)```
or specific method
```const { people, ages } = require(./people)```

## OS information

```const os = require('os');```
```console.log(os);```

## File System

### Install FS

```npm install fs```

### Reading Files

this is async function
<pre>fs.readFile('./dir/filename.txt', (err,data)=>{

    if (err) {
        console,log(err);
    }
    console.log(data.toString());
});

</pre>

### Create Files

1. This is async function
2. It will create the file if it doesnt exist.

<pre>fs.writeFile('./dir/filename.txt', 'Text you want to pass' ,(err,data)=>{

    if (err) {
        console,log(err);
    }
    console.log(data.toString());
});
</pre>


### Directories

1. We can check if a folder exists (if statement) and then execute
<pre>
if(!fs.existsSync('./file')) {
fs.mkdir('./dir/file' ,(err)=>{

    if (err) {
        console,log(err);
    }
    console.log("folder created sucessfully");
});
else { 
    fs.rmdir('./file',(err) => {

        if (err){console.log(err)}
        console.log("folder deleted");
    });
}}
</pre>


### deleting files

<pre>
if(fs.existsSync('./file/deleteme.txt')) {
**fs.unlink**('./dir/file/deleteme.txt' ,(err)=>{

    if (err) {
        console,log(err);
    }
    console.log("file deleted");
});
else { 
        console.log("file doesnt exist");
    };
}
</pre>

## Streams & Buffers

### General

```const fs = require('fs');```
where to read the data from:
```const readStream = fs.createReadStream('./docs/file.txt', {encoding: 'utf8'});```
we can also write a stream
``` const writeStream = fs.createWriteStream('./docs/text2.txt');```

listening to the stream, like event listener, console log it and write the chunk into file.
<pre>
readStream.on('data',(chunk)=>{

console.log('New Chunk');
console.log('chunk');
writeSteam.write('\nNEW CHUNK\n');
writeStream.write(chunk);
});
</pre>

### Piping method

Same as above but much shorter
```readStream.pipe(writeStream);```

## Create a Server

### General

<pre>
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

/* server listening to requests to the server */
server.listen(3000, 'localhost', () => {

    console.log("listening for requests on port 3000");
})
</pre>

### Response & Returning

<pre>
const http = require('http');
const fs = require('fs');
const { isRegExp } = require('util');



const server = http.createServer((req, res) => {
    console.log('request made');

    //set header content type , send and close
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        }

        res.write(data);
        res.end();
        /* res.end(data); replaces above 2 entries.*/
    })
});
/* server listening to requests to the server */
server.listen(3000, 'localhost', () => {

    console.log("listening for requests on port 3000");
})

</pre>