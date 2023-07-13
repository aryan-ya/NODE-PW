const fs = require('fs');
const { buffer } = require('stream/consumers');
console.log("READ START");
// ashynchorus file

// fs.readFile('input.txt', function(err, data){
//     if (err) {
//         console.log('error' , err);
//         return err;   
//     }
  
//     console.log('Data :' , data.toString);
//     console.log('READ END');
//     return data;
// });
// console.log('other stuff');

// synchorus way to file


// ************************read**********************************

// var data = fs.readFileSync('input.txt');

// console.log("Data" , data.toString());

// console.log("OTHER STUFF");

// console.log("Read End");

// Read > Open REad

//  const buf = new Buffer(1024);

// fs.open('input.txt', 'r+' , function(err , fd){
//     if (err) {
//         console.log("Error opening is file:" , err);
//     } 
//     console.log("file open succesfully");

//     fs.read(fd, buf, 0, buf.length, 0, function(er , bytes){
//         if(er){
//             console.log("Error is reading file");
//         }
//         console.log("Data" , bytes);
//         console.log("data:" , buf.slice(0, bytes).toString());

//         fs.close(fd, function(err){
//            if (err) {
//               console.log('Error in closing file');
//            } else {
//              console.log('success in closing file');
//            }
//         })
//     })
    

// });



// ***********************writefile***********************


// fs.writeFile('input.txt', 'PW SKILLS' ,function(err){
//     if (err) {
//         console.log("error r success file");
//     } else {
//         console.log("success r not file");
//     }
// })


// ********************appending file********************************

// fs.appendFile('input.txt', '----aryan yadav', 'utf-8' , function(err){
//     if (err) {
//         console.log("error in appending file");
//     } else {
//         console.log("success is appending file");
//     }
// })




// **********************Delelteing file**************************


// fs.unlink('input.txt', function(err){
//    if (err) {
//     console.log("Error in deleting file");
//    }else{
//     console.log("success in deleting file");
//    }  
// })