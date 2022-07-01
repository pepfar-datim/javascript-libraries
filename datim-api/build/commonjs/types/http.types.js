"use strict";
exports.__esModule = true;
exports.ErrorType = exports.ContentType = exports.HttpMethod = void 0;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["post"] = "POST";
    HttpMethod["get"] = "GET";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var ContentType;
(function (ContentType) {
    ContentType["json"] = "application/json";
    ContentType["text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["cannotParse"] = 0] = "cannotParse";
    ErrorType[ErrorType["silentRedirect"] = 1] = "silentRedirect";
    ErrorType[ErrorType["httpError"] = 2] = "httpError";
    ErrorType[ErrorType["alreadyExists"] = 3] = "alreadyExists";
    ErrorType[ErrorType["dhis2ErrorSpecified"] = 4] = "dhis2ErrorSpecified";
    ErrorType[ErrorType["dhis2ErrorUnspecified"] = 5] = "dhis2ErrorUnspecified";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=http.types.js.map