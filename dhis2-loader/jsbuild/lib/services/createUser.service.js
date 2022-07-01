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
exports.__esModule = true;
exports.createUpdateUser = exports.Operation = void 0;
var httpRequest_service_1 = require("./httpRequest.service");
var print_1 = require("./print");
var commonjs_1 = require("@pepfar-react-lib/datim-api/build/commonjs");
var assembleUrl_service_1 = require("./assembleUrl.service");
var Operation;
(function (Operation) {
    Operation[Operation["create"] = 0] = "create";
    Operation[Operation["update"] = 1] = "update";
})(Operation = exports.Operation || (exports.Operation = {}));
function getOperationMeta(operation, userObject) {
    var user = userObject.userCredentials.username;
    switch (operation) {
        case Operation.create:
            return { method: commonjs_1.HttpMethod.post, url: '/users', beforeMessage: "Creating user ".concat(user), afterMessage: "User ".concat(user, " created") };
        case Operation.update:
            return { method: commonjs_1.HttpMethod.put, url: "/users/".concat(userObject.id, ".json"), beforeMessage: "Updating user ".concat(user), afterMessage: "User ".concat(user, " updated") };
    }
}
function createUpdateUser(operation, baseUrl, authorization, userObject) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, method, url, beforeMessage, afterMessage, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = getOperationMeta(operation, userObject), method = _a.method, url = _a.url, beforeMessage = _a.beforeMessage, afterMessage = _a.afterMessage;
                    (0, print_1.info)(beforeMessage);
                    return [4 /*yield*/, (0, httpRequest_service_1.sendJson)(method, (0, assembleUrl_service_1.assembleUrl)(baseUrl, url), userObject, authorization)];
                case 1:
                    response = _b.sent();
                    if (response.success)
                        return [2 /*return*/, (0, print_1.success)("".concat(afterMessage, " Response: ").concat(response.rawResponse.status, " ").concat(response.rawResponse.statusText))];
                    else
                        (0, print_1.error)(response.errorMessage || '');
                    if (response.errorType === commonjs_1.ErrorType.alreadyExists && operation === Operation.create)
                        return [2 /*return*/, createUpdateUser(Operation.update, baseUrl, authorization, userObject)];
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUpdateUser = createUpdateUser;
//# sourceMappingURL=createUser.service.js.map