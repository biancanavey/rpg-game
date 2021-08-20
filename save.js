'use strict';
const fs = require('fs');

// Attempt to read the state file, and parse it into an object
// to return to caller.
const read = () => {
    fs.readFile('save.json', (err, data) => {
        if (err) {
            throw err;
        } 
        const saveData = JSON.parse(data);
        console.log(saveData);
    });
};

const write = (dataToBeSaved) => {
    const content = JSON.stringify(dataToBeSaved, null, 2);
    fs.writeFile('save.json', content, { flag: 'a' }, (err) => {
        if (err) throw err;
        console.log("Data written to save.json");
    });
};

const del = () => {
    fs.unlink("save.json", (err => {
        if (err) console.log(err);
        else {
          console.log("\nDeleted file: save.json");       
        }
      }));    
}

module.exports = {
    read,
    write,
    del
}
// module.exports = {
//     Character,
//     Mage,
//     Warrior,
//     Thief,
//     calculateTotalHP, 
//     calculateLevel, 
//     calculateAD
// };

// const obj = {
//     name: "Bianca",
//     age: "baby",
// }

// const read = async () => {
//     try {
//         const response = await fs.readFile('save.json');
//         const data = JSON.parse(response);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// const write = async (dataToBeSaved) => {
//     const data = JSON.stringify(dataToBeSaved, null, 2);
//     try {
//         await fs.writeFile('save.json', data);
//         console.log("Data written to be save.json");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const del = async () => {
//     try {
//         fs.unlink("save.json")
//         console.log("\nDeleted file: save.json");
        
//     } catch (error) {
//         console.log(error);
//     }   
// }

// const obj = {
//     name: "Bianca",
//     age: "baby",
// }

// write(obj)
// read()
// del()


// const read = (callback) => fs.readFile("./save.json", (err, state) => {
//     if (err) {
//         // File could not be read... not found, bad permissions,
//         // out of file descriptors on OS...
//         return callback(err)
//     }
//     try {
//         // Attempt to parse the contents of the state file.
//         return callback(null, JSON.parse(state));
//     } catch (err) {
//         // Unable to parse, return the error to caller.
//         return callback(err);
//     }
// });
// // Write the stringified state object to the save file.
// const write = (state, callback) =>
//     fs.writeFile("save.json", JSON.stringify(state, null, 2), callback);

//Delete method
// const del = callback => fs.unlink("save.json", callback);




// promisify the exports
// const util = require('util');
//     module.exports = {
//         read: util.promisify(read),
//         write: util.promisify(write),
//         del: util.promisify(del)
// };
