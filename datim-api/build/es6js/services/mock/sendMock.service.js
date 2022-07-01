import { MockService } from "./mock.service";
var sendMockService = new MockService();
export function registerSendMock(url, response) {
    return new Promise(function (resolve) {
        sendMockService.registerMockedResponse(url, { response: response, resolve: resolve });
    });
}
export function mockSendingData(url, payload) {
    if (!isSendMocked(url))
        throw new Error("POST/PUT mock not in place");
    var _a = sendMockService.getMockedResponse(url), resolve = _a.resolve, response = _a.response;
    resolve(payload);
    return Promise.resolve({ responseBody: response, success: true, rawResponse: null });
}
export function isSendMocked(url) {
    return sendMockService.isMocked(url);
}
//# sourceMappingURL=sendMock.service.js.map