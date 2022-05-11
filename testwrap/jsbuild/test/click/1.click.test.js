"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var click_utils_1 = require("../../modules/click.utils");
var click_testService_1 = require("./click.testService");
function TestPage(_a) {
    var onClick = _a.onClick;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { "data-testid": 'testIdToFind', onClick: onClick }, "Button 1"));
}
(0, click_testService_1.generateClickTest)(click_utils_1.click, 'testIdToFind', TestPage);
//# sourceMappingURL=1.click.test.js.map