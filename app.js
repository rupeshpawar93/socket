const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const compression = require("compression");
let routes = require("./route");

app.use(
  bodyParser.json({
    extended: false,
    parameterLimit: 10000,
    limit: 1024 * 1024 * 10
  })
);

var server = require("http").Server(app);
var io = require("socket.io")(server);
// var server = http.createServer(app);

io.on("connection", function(socket) {
  console.log("socket added");
  app.set("socket", socket);
});
app.set("io", io);
app.use(routes);
app.use(compression);
//Security Middleware
app.use(helmet());
app.listen("3000", function() {
  console.log(" app listening on port " + 3000);
});
