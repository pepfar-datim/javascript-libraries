import { getLocalPath, getRemotePath } from "../lib/services/path.service";
var example = {
    nameSpace: 'pepfar-react-lib',
    localName: 'easytest'
};
test('Local Path', function () {
    expect(getLocalPath(example)).toBe('node_modules/@pepfar-react-lib/easytest');
});
test('Remote Path', function () {
    expect(getRemotePath('../npm', example)).toBe('../npm/easytest');
});
//# sourceMappingURL=2.path.test.js.map