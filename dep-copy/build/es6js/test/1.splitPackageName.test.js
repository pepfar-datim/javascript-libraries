import { splitPackageName } from "../lib/services/getPackageName.service";
var testCases = [{
        input: '@jakub-bao/dev-copy',
        output: {
            nameSpace: 'jakub-bao',
            localName: 'dev-copy'
        }
    }];
function generateTest(_a) {
    var input = _a.input, output = _a.output;
    test("1 > splitPackageName ".concat(input), function () {
        expect(splitPackageName(input)).toStrictEqual(output);
    });
}
testCases.forEach(generateTest);
//# sourceMappingURL=1.splitPackageName.test.js.map