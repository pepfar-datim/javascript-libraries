"use strict";
exports.__esModule = true;
exports.postEmpty = exports.postText = exports.patchJson = exports.putJson = exports.postJson = void 0;
var http_types_1 = require("../../types/http.types");
var inspectResponse_service_1 = require("./inspectResponse.service");
var sendMock_service_1 = require("../mock/sendMock.service");
var config_service_1 = require("../config.service");
function postJson(url, body) {
    return sendData(http_types_1.HttpMethod.post, url, http_types_1.ContentType.json, body);
}
exports.postJson = postJson;
function putJson(url, body) {
    return sendData(http_types_1.HttpMethod.put, url, http_types_1.ContentType.json, body);
}
exports.putJson = putJson;
function patchJson(url, body) {
    return sendData(http_types_1.HttpMethod.patch, url, http_types_1.ContentType.json, body);
}
exports.patchJson = patchJson;
function postText(url, body) {
    return sendData(http_types_1.HttpMethod.post, url, http_types_1.ContentType.text, body);
}
exports.postText = postText;
function postEmpty(url) {
    return sendData(http_types_1.HttpMethod.post, url, http_types_1.ContentType.text, null);
}
exports.postEmpty = postEmpty;
function sendData(method, endpoint, contentType, payload) {
    if ((0, config_service_1.isTestEnv)())
        return (0, sendMock_service_1.mockSendingData)(endpoint, payload);
    return fetch((0, config_service_1.getFullUrl)(endpoint), {
        method: method,
        credentials: 'include',
        headers: {
            'Content-Type': contentType
        },
        body: contentType === http_types_1.ContentType.json ? JSON.stringify(payload) : payload
    }).then(inspectResponse_service_1.inspectResponse).then(function (apiResponse) {
        if (!apiResponse.success)
            throw new Error(apiResponse.errorMessage);
        else
            return apiResponse;
    });
}
//# sourceMappingURL=sendData.service.js.map