"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log("this is logging middleware: " + req.rawHeaders[1]);
    next();
});
app.get("/", function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/blue", function (req, res) {
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    res.send({ som: app_model_1.Cat[0] });
});
app.use(function (req, res, next) {
    var error = {
        status: "404",
        msg: "Not Found Page",
    };
    console.log("this is error middleware");
    res.send("<h1>" + error.status + " " + error.msg + "</h1>");
});
app.listen(8080, function () {
    console.log("Server is on...");
});
//# sourceMappingURL=app.js.map