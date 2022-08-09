"use strict";
exports.__esModule = true;
var path_service_1 = require("../lib/services/path.service");
var example = {
    nameSpace: 'pepfar-react-lib',
    localName: 'easytest'
};
test('Local Path', function () {
    expect((0, path_service_1.getLocalPath)(example)).toBe('node_modules/@pepfar-react-lib/easytest');
});
test('Remote Path', function () {
    expect((0, path_service_1.getRemotePath)('../npm', example)).toBe('../npm/easytest');
});
//# sourceMappingURL=2.path.test.js.map