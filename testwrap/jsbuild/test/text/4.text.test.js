"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var text_utils_1 = require("../../modules/text.utils");
var shared_testService_1 = require("../shared/shared.testService");
function Page() {
    return react_1.default.createElement(react_1.default.Fragment, null, "text to be found on the page");
}
beforeEach(function () {
    (0, react_2.render)(react_1.default.createElement(Page, null));
});
test("4 > Text", function () {
    (0, text_utils_1.text)('text to be found');
    (0, shared_testService_1.toFail)(function () { return (0, text_utils_1.text)('not to be found'); });
});
test('4 > No text', function () {
    (0, text_utils_1.noText)('not to be found');
    (0, shared_testService_1.toFail)(function () { return (0, text_utils_1.noText)('text to be found'); });
});
test('4 > No text', function () {
    (0, text_utils_1.texts)(['text', 'to', 'be', 'found']);
    (0, shared_testService_1.toFail)(function () { return (0, text_utils_1.noTexts)(['not', 'to', 'be', 'found']); });
});
//# sourceMappingURL=4.text.test.js.map