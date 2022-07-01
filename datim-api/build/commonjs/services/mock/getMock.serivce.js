"use strict";
exports.__esModule = true;
exports.isGetMocked = exports.getMockedResponse = exports.registerGetMock = void 0;
var mock_service_1 = require("./mock.service");
var getMockService = new mock_service_1.MockService();
function registerGetMock(url, response) {
    getMockService.registerMockedResponse(url, response);
}
exports.registerGetMock = registerGetMock;
function getMockedResponse(url) {
    return { json: function () { return getMockService.getMockedResponse(url); } };
}
exports.getMockedResponse = getMockedResponse;
function isGetMocked(url) {
    return getMockService.isMocked(url);
}
exports.isGetMocked = isGetMocked;
//# sourceMappingURL=getMock.serivce.js.map