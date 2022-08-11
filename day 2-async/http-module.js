const http = require("http");

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((request, response) => {
  console.log(request.url);
  //   /about
  //   /
  //   /contact
});

server.listen(5000, () => {
  console.log("Server is running");
});
