var MockService = /** @class */ (function () {
    function MockService() {
        this.registeredMocks = [];
    }
    MockService.prototype.registerMockedResponse = function (url, response) {
        this.registeredMocks = this.registeredMocks.filter(function (mock) { return mock.url !== url; });
        this.registeredMocks.push({ url: url, response: response });
    };
    MockService.prototype.getMockedResponse = function (url) {
        var foundMocks = this.registeredMocks.filter(function (m) { return m.url === url; });
        if (foundMocks.length === 0)
            return null;
        if (foundMocks.length > 1)
            throw new Error("Found multiple get mocks matching ".concat(url));
        if (typeof foundMocks[0].response !== 'string')
            return foundMocks[0].response;
    };
    MockService.prototype.isMocked = function (url) {
        return this.registeredMocks.some(function (m) { return m.url === url; });
    };
    return MockService;
}());
export { MockService };
//# sourceMappingURL=mock.service.js.map