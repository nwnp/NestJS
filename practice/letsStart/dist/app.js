"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var data = [1, 2, 3];
app.get("/", function (req, res) {
    console.log(req);
    res.send({ data: data });
});
app.listen(8080, function () {
    console.log("Server is on...");
});
//# sourceMappingURL=app.js.map