import { MockService } from "./mock.service";
var getMockService = new MockService();
export function registerGetMock(url, response) {
    getMockService.registerMockedResponse(url, response);
}
export function getMockedResponse(url) {
    return { json: function () { return getMockService.getMockedResponse(url); } };
}
export function isGetMocked(url) {
    return getMockService.isMocked(url);
}
//# sourceMappingURL=getMock.serivce.js.map