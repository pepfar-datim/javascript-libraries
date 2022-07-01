import { urlToFilename } from "./urlToFilename.service";
var cachedResponseList = [];
var fs;
var cacheDir;
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
    import('fs').then(initTestCache);
    cacheDir = process.cwd() + '/cachedApiCalls';
}
function initTestCache(lib) {
    fs = lib;
    if (!fs.existsSync(cacheDir))
        fs.mkdirSync(cacheDir);
    cachedResponseList = fs.readdirSync("".concat(cacheDir, "/")).map(function (fileName) { return fileName.replace('.json', ''); });
}
function saveToFile(fileName, data) {
    fs.writeFileSync("".concat(cacheDir, "/").concat(fileName, ".json"), JSON.stringify(data));
}
function saveResponseToCache(username, url, response) {
    var fileName = urlToFilename(username, url);
    cachedResponseList.push(fileName);
    saveToFile(fileName, response);
}
function isResponseCached(username, url) {
    return cachedResponseList.includes(urlToFilename(username, url));
}
function getCachedResponse(username, url) {
    var fileName = urlToFilename(username, url);
    var path = "".concat(cacheDir, "/").concat(fileName, ".json");
    var data = JSON.parse(fs.readFileSync(path).toString());
    return { json: function () { return data; } };
}
export { initTestCache, saveResponseToCache, isResponseCached, getCachedResponse };
//# sourceMappingURL=getCache.service.js.map