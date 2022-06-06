"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 8080;
app.get("/", function (req, res) {
    res.send({ name: "jin" });
});
app.listen(PORT, function () {
    console.log(PORT, "번에서 대기 중....");
});
//# sourceMappingURL=app.js.map