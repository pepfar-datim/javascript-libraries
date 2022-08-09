"use strict";
exports.__esModule = true;
exports.splitPackageName = void 0;
function splitPackageName(fullName) {
    var tokens = fullName.split('/');
    var nameSpace = tokens[0].replace('@', '');
    return { nameSpace: nameSpace, localName: tokens[1] };
}
exports.splitPackageName = splitPackageName;
//# sourceMappingURL=getPackageName.service.js.map