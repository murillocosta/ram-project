const http = require('http');
const log = require('./src/utils/log')
const routes = require('./src/routes')

const server = http.createServer((request, response) => {
    const { url } = request
    log.request(url)    
    routes[url](request, response)
})
// TODO 1h07min

const PORT = 3000
server.listen(PORT, () => console.log(`~* Server listening on port ${PORT} *~`))