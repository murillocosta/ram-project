const fs = require('fs')

class FileSystem {
    static async writeFile(content){
        const name  = content[0].name.toLowerCase().replaceAll(' ','-')
        const fileName = `./src/tmp/${name}.json`        
        return await fs.promises.writeFile(fileName, JSON.stringify(content))
    }
}

module.exports = FileSystem