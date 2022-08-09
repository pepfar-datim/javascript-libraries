"use strict";
exports.__esModule = true;
exports.removePeerDependencies = void 0;
var fs_1 = require("fs");
var path_service_1 = require("./path.service");
var getPackageName_service_1 = require("./getPackageName.service");
function removePeerDependencies(packageJson) {
    if (!packageJson.peerDependencies)
        return console.log("No peer dependencies found");
    var peerDependencies = Object.keys(packageJson.peerDependencies);
    peerDependencies.forEach(function (depName) {
        var packagePath = (0, path_service_1.getLocalPath)((0, getPackageName_service_1.splitPackageName)(packageJson.name)) + '/node_modules/' + depName;
        (0, fs_1.rmdir)(packagePath, { recursive: true }, function () {
            console.log("Deleted ".concat(packagePath));
        });
    });
}
exports.removePeerDependencies = removePeerDependencies;
//# sourceMappingURL=removePeerDependencies.service.js.map