"use strict";
exports.__esModule = true;
exports.urlToFilename = void 0;
var md5_1 = require("md5");
function clean(url) {
    return url.replace(/^.+\/api/, "");
}
function getPrefix(url) {
    return clean(url)
        .replace(/\?.+$/, '')
        .replace(/\//, '')
        .replace(/\//g, '_')
        .replace(".json", '');
}
function urlToFilename(username, url) {
    return "".concat(getPrefix(url), "_").concat((0, md5_1["default"])(username + clean(url)));
}
exports.urlToFilename = urlToFilename;
//# sourceMappingURL=urlToFilename.service.js.map