"use strict";
exports.__esModule = true;
exports.getFullUrl = exports.getBaseUrl = exports.isTestEnv = exports.getAuthorization = exports.setTestUsername = exports.register = exports.config = void 0;
var config_type_1 = require("../types/config.type");
exports.config = {
    environment: null,
    baseUrl: null,
    testUsername: null,
    authorization: null
};
function register(environment, baseUrl) {
    if (!['production', 'development', 'test'].includes(environment))
        throw new Error("Incorrect environment provided: ".concat(environment));
    exports.config.environment = environment;
    if (exports.config.environment === config_type_1.Environment.production)
        exports.config.baseUrl = "../../../";
    else
        exports.config.baseUrl = baseUrl;
}
exports.register = register;
function setTestUsername(testUsername, authorization) {
    exports.config.testUsername = testUsername;
    exports.config.authorization = authorization;
}
exports.setTestUsername = setTestUsername;
function getAuthorization() {
    return exports.config.authorization;
}
exports.getAuthorization = getAuthorization;
function isTestEnv() {
    if (!exports.config.environment)
        throw new Error("Environment not provided");
    return exports.config.environment === config_type_1.Environment.test;
}
exports.isTestEnv = isTestEnv;
function getBaseUrl() {
    if (!exports.config.baseUrl)
        throw new Error("baseUrl not set");
    return exports.config.baseUrl;
}
exports.getBaseUrl = getBaseUrl;
function getFullUrl(endpoint) {
    return "".concat(getBaseUrl(), "api").concat(endpoint);
}
exports.getFullUrl = getFullUrl;
//# sourceMappingURL=config.service.js.map