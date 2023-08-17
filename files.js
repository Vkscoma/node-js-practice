const fs = require('fs'); // file system

// reading files
// fs.readFile('./docs/blog.txt', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data.toString());
// });



// writing files
// fs.writeFile('./docs/blog.txt', 'Writing my new text!', () => {
//     console.log('File was written!');
// });

// fs.writeFile('./docs/blog2.txt', 'Writing my new text!', () => {
//     console.log('File was written!');
// });
// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log('Folder created!');
//     });
// } else {
//     console.log('Folder already exists!');
// }
// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('File deleted!');
    });
} else {
    console.log('File does not exist!');
}
