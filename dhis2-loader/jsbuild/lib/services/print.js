"use strict";
exports.__esModule = true;
exports.info = exports.success = exports.error = void 0;
var colors = require('colors');
var error = function (message) {
    console.log("ERROR ".concat(colors.red(message)));
};
exports.error = error;
var success = function (message) { return console.log(colors.green(message)); };
exports.success = success;
var info = function (message) { return console.log(colors.blue(message)); };
exports.info = info;
//# sourceMappingURL=print.js.map