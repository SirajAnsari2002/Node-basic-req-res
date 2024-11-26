const HTTP = require("http");
const userRequestHandler = require("./user");
const SERVER = HTTP.createServer(userRequestHandler);
const PORT = 3000;
SERVER.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
