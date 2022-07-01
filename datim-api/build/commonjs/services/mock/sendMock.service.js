"use strict";
exports.__esModule = true;
exports.isSendMocked = exports.mockSendingData = exports.registerSendMock = void 0;
var mock_service_1 = require("./mock.service");
var sendMockService = new mock_service_1.MockService();
function registerSendMock(url, response) {
    return new Promise(function (resolve) {
        sendMockService.registerMockedResponse(url, { response: response, resolve: resolve });
    });
}
exports.registerSendMock = registerSendMock;
function mockSendingData(url, payload) {
    if (!isSendMocked(url))
        throw new Error("POST/PUT mock not in place");
    var _a = sendMockService.getMockedResponse(url), resolve = _a.resolve, response = _a.response;
    resolve(payload);
    return Promise.resolve({ responseBody: response, success: true, rawResponse: null });
}
exports.mockSendingData = mockSendingData;
function isSendMocked(url) {
    return sendMockService.isMocked(url);
}
exports.isSendMocked = isSendMocked;
//# sourceMappingURL=sendMock.service.js.map