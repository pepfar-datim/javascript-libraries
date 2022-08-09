"use strict";
exports.__esModule = true;
exports.fullCopy = void 0;
var path_service_1 = require("./path.service");
var cpy_1 = require("cpy");
function fullCopy(_a) {
    var path = _a.path, name = _a.name, peerDependencies = _a.peerDependencies;
    return (0, cpy_1["default"])(path + '/**/*', (0, path_service_1.getLocalPath)(name), {
        filter: function (file) { return !peerDependencies.some(function (peerName) { return file.relativePath.includes(peerName); }); }
    });
}
exports.fullCopy = fullCopy;
//# sourceMappingURL=fullCopy.service.js.map