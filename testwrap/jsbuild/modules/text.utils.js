"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textsWait = exports.textWait = exports.noTexts = exports.noText = exports.texts = exports.text = void 0;
var react_1 = require("@testing-library/react");
/**
 * Check if `text` is present in DOM **right now**
 *
 * @example
 * ```javascript
 * text('My awesome website')
 * ```
 * @category Text
 * */
function text(text) {
    react_1.screen.getAllByText(new RegExp(text));
}
exports.text = text;
/**
 * Check if multiple `texts` are present in DOM **right now**
 *
 * @example
 * ```javascript
 * texts(['My website','Login','Latest news'])
 * ```
 * @category Text
 * */
function texts(texts) {
    texts.forEach(function (textToFind) { return text(textToFind); });
}
exports.texts = texts;
/**
 * Check that `text` is **NOT** present in DOM
 *
 * @example
 * ```javascript
 * noText('Error')
 * ```
 * @category Text
 * */
function noText(text) {
    if (!/[A-z0-9 ]+/.test(text))
        throw new Error("noText only supports [A-z0-9 ]. '".concat(text, "' was provided"));
    expect(react_1.screen.queryByText(new RegExp(text))).toBeNull();
}
exports.noText = noText;
/**
 * Check that **none** of the provided tests are present in dom **right now**
 *
 * @example
 * ```javascript
 * noTexts(['Error','Loading'])
 * ```
 * @category Text
 * */
function noTexts(textsToFind) {
    textsToFind.forEach(noText);
}
exports.noTexts = noTexts;
/**
 * **Wait** until `text` appears in DOM
 *
 * @example
 * ```javascript
 * await textWait('3 results found')
 * ```
 * @category Text
 * */
function textWait(text) {
    return react_1.screen.findAllByText(new RegExp(text));
}
exports.textWait = textWait;
/**
 * **Wait** until all texts appear in DOM
 *
 * @example
 * ```javascript
 * await textsWait(['3 results found','George Orwell','1984'])
 * ```
 * @category Text
 * */
function textsWait(textsToFind, timeOut) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, textsToFind_1, text_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, textsToFind_1 = textsToFind;
                    _a.label = 1;
                case 1:
                    if (!(_i < textsToFind_1.length)) return [3 /*break*/, 4];
                    text_1 = textsToFind_1[_i];
                    return [4 /*yield*/, react_1.screen.findAllByText(new RegExp(escapeRegExp(text_1)), {}, { timeout: timeOut || 5000 })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.textsWait = textsWait;
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=text.utils.js.map