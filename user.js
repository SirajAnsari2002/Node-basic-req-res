const FS = require("fs");
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome to home page</title></head>");
    res.write("<body>");
    res.write("<h1>Please Enter your details...</h1>");
    res.write('<form action = "/content-url" method = "POST">');
    res.write(
      '<input type = "text" id = "name" name = "username" placeholder = "enter your name..">'
    );
    res.write('<label for = "male">male</label>');
    res.write(
      '<input type = "radio" id = "male" name = "gender" value = "male">'
    );
    res.write('<label for = "female">female</label>');
    res.write(
      '<input type = "radio" id = "female" name = "gender" value = "female">'
    );
    res.write('<input type = "submit" value = "submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/content-url" &&
    req.method === "POST"
  ) {
    //FS.writeFileSync("siraj.txt", "Siraj Ansari");
    const BODY = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      BODY.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(BODY).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      bodyString = JSON.stringify(bodyObject);
      FS.writeFileSync("siraj.txt", bodyString);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server</title></head>");
  res.write("<body>I love you Siraj</body>");
  res.write("</html>");
  res.end();

  // console.log(req);
};

module.exports = userRequestHandler;
