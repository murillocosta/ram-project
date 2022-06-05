const http = require("http");
const log = require("./src/utils/log");
const routes = require("./src/routes");
const urlEncode = require("url");
const qs = require("querystring");

const server = http.createServer((request, response) => {
  try {
    const { url } = request;
    const { pathname, query } = urlEncode.parse(url);
    log.request(pathname);
    console.log(pathname);
    const queryParsed = qs.parse(query);

    if (!routes[pathname]) {
      throw {
        statusCode: 404,
        message: "The page was not found! Try with a different url.",
      };
    }

    request.queryParams = queryParsed;
    routes[pathname](request, response);
  } catch (error) {
    response.writeHead(error.statusCode);
    response.end(error.message);
  }
});


const PORT = 3000;
server.listen(PORT, () =>
  console.log(`~* Server listening on port ${PORT} *~`)
);
