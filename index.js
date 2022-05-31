const http = require('http');
const log = require('./src/utils/log')
const routes = require('./src/routes')
const urlEncode = require('url')
const qs = require('querystring')

const server = http.createServer((request, response) => {
    const { url } = request
    const { pathname, query } = urlEncode.parse(url)
    log.request(pathname)
    const queryParsed = qs.parse(query)
    request.queryParams = queryParsed
    routes[pathname](request, response)
})
// TODO 1h07min

const PORT = 3000
server.listen(PORT, () => console.log(`~* Server listening on port ${PORT} *~`))