import md5 from "md5";
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
export function urlToFilename(username, url) {
    return "".concat(getPrefix(url), "_").concat(md5(username + clean(url)));
}
//# sourceMappingURL=urlToFilename.service.js.map