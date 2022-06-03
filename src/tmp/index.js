const fs = require('fs')

module.exports = writeTempFile= (fileName, data) => fs.writeFile(fileName, data, 'utf-8', (err)=> {
    if(err) throw err;
    console.log('The file has been written.')
})

