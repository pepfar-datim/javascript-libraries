"use strict";
exports.__esModule = true;
exports.getRemotePath = exports.getLocalPath = void 0;
var getLocalPath = function (_a) {
    var nameSpace = _a.nameSpace, localName = _a.localName;
    return "node_modules/@".concat(nameSpace, "/").concat(localName);
};
exports.getLocalPath = getLocalPath;
var getRemotePath = function (rootPath, packageName) { return "".concat(rootPath, "/").concat(packageName.localName); };
exports.getRemotePath = getRemotePath;
//# sourceMappingURL=path.service.js.map