export var getLocalPath = function (_a) {
    var nameSpace = _a.nameSpace, localName = _a.localName;
    return "node_modules/@".concat(nameSpace, "/").concat(localName);
};
export var getRemotePath = function (rootPath, packageName) { return "".concat(rootPath, "/").concat(packageName.localName); };
//# sourceMappingURL=path.service.js.map