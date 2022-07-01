"use strict";
exports.__esModule = true;
exports.getCachedResponse = exports.isResponseCached = exports.saveResponseToCache = exports.initTestCache = void 0;
var urlToFilename_service_1 = require("./urlToFilename.service");
var cachedResponseList = [];
var fs;
var cacheDir;
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
    Promise.resolve().then(function () { return require('fs'); }).then(initTestCache);
    cacheDir = process.cwd() + '/cachedApiCalls';
}
function initTestCache(lib) {
    fs = lib;
    if (!fs.existsSync(cacheDir))
        fs.mkdirSync(cacheDir);
    cachedResponseList = fs.readdirSync("".concat(cacheDir, "/")).map(function (fileName) { return fileName.replace('.json', ''); });
}
exports.initTestCache = initTestCache;
function saveToFile(fileName, data) {
    fs.writeFileSync("".concat(cacheDir, "/").concat(fileName, ".json"), JSON.stringify(data));
}
function saveResponseToCache(username, url, response) {
    var fileName = (0, urlToFilename_service_1.urlToFilename)(username, url);
    cachedResponseList.push(fileName);
    saveToFile(fileName, response);
}
exports.saveResponseToCache = saveResponseToCache;
function isResponseCached(username, url) {
    return cachedResponseList.includes((0, urlToFilename_service_1.urlToFilename)(username, url));
}
exports.isResponseCached = isResponseCached;
function getCachedResponse(username, url) {
    var fileName = (0, urlToFilename_service_1.urlToFilename)(username, url);
    var path = "".concat(cacheDir, "/").concat(fileName, ".json");
    var data = JSON.parse(fs.readFileSync(path).toString());
    return { json: function () { return data; } };
}
exports.getCachedResponse = getCachedResponse;
//# sourceMappingURL=getCache.service.js.map