"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
app.use(function (req, res, next) {
    console.log("this is logging middleware: " + req.rawHeaders[1]);
    next();
});
app.use(express.json());
app.use("/cats", cats_route_1.default);
app.use(function (req, res, next) {
    var error = {
        status: "404",
        msg: "Not Found Page",
    };
    console.log("this is error middleware");
    res.send("<h1>" + error.status + " " + error.msg + "</h1>");
});
app.listen(8080, function () {
    console.log("Server(8080) is on...");
});
//# sourceMappingURL=app.js.map