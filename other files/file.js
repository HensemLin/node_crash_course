// const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// console.log('last line');
// writing files
// fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
//     console.log('file was written');
// });


// directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else{
//     fs.rmdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files
// if (fs.existsSync('./docs/deletename.txt')){
//     fs.unlink('./docs/deletename.txt', (err) => {
//         if (err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }