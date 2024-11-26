const HTTP = require("http");

const SERVER = HTTP.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1> welcome to home page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1> welcome to men page</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1> welcome to women page</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1> welcome to kids page</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1> welcome to cart page</h1>");
    return res.end();
  }
  res.write(`
        <html>
    <head>
        <title>
            server
        </title>
    </head>
    <body>
        <head>
            <nav>
                <ul>
                    <li><a href = "/home">Home</a></li>
                    <li><a href = "/men">Men</a></li>
                    <li><a href = "/women">Women</a></li>
                    <li><a href = "/kids">Kids</a></li>
                    <li><a href = "/cart">Cart</a></li>
                </ul>
            </nav>
        </head>
    </body>
</html>
        `);

  return res.end();
});
const PORT = 3000;

SERVER.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
