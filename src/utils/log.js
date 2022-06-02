const {
    DateTime
} = require('luxon')

exports.request = path => {
    const dt = DateTime.now()
    return console.info(`[REQUEST: ${path}] => ${dt.toISO()}`)
}

exports.err = obj => {
const dt = DateTime.now();
return console.log(`[ERROR: ${JSON.stringify(obj)} =>> ${dt.toISO()}]`);
}