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
import { ErrorType } from "../../types/http.types";
function getErrorMessage(errorType, apiResponse) {
    switch (errorType) {
        case ErrorType.cannotParse:
            return "Unsupported server response. Cannot retrieve response body.";
        case ErrorType.silentRedirect:
            return "Wrong request. Response status ".concat(apiResponse.rawResponse.status, ", Redirected to ").concat(apiResponse.rawResponse.url, "\n\tThis likely means either wrong url or invalid authentication");
        case ErrorType.httpError:
            return "Response status ".concat(apiResponse.rawResponse.status, " ").concat(apiResponse.rawResponse.statusText, "\n\tUrl: ").concat(apiResponse.rawResponse.url);
        case ErrorType.alreadyExists:
            return "Object already exists. ".concat(apiResponse.responseBody.typeReports[0].objectReports[0].errorReports[0].message);
        case ErrorType.dhis2ErrorSpecified:
            return "Server response: ".concat(apiResponse.responseBody.typeReports[0].objectReports[0].errorReports[0].message);
        case ErrorType.dhis2ErrorUnspecified:
            return "Server responded with status 200 but error in response body. Cannot retrieve error message.";
    }
}
var FailService = /** @class */ (function () {
    function FailService(apiResponse) {
        this.apiResponse = apiResponse;
    }
    FailService.prototype.fail = function (errorType) {
        this.apiResponse.success = false;
        this.apiResponse.errorType = errorType;
        this.apiResponse.errorMessage = getErrorMessage(errorType, this.apiResponse);
        return this.apiResponse;
    };
    FailService.prototype.success = function () {
        this.apiResponse.success = true;
        return this.apiResponse;
    };
    return FailService;
}());
export function inspectResponse(rawResponse) {
    return __awaiter(this, void 0, void 0, function () {
        var apiResponse, failService, responseBody, _a, _b, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    apiResponse = {
                        success: false,
                        rawResponse: rawResponse
                    };
                    failService = new FailService(apiResponse);
                    if (!rawResponse.ok)
                        return [2 /*return*/, failService.fail(ErrorType.httpError)];
                    if (rawResponse.redirected && rawResponse.url.includes('login'))
                        return [2 /*return*/, failService.fail(ErrorType.silentRedirect)];
                    if (rawResponse.status === 204 && !rawResponse.redirected)
                        return [2 /*return*/, failService.success()];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, rawResponse.text()];
                case 2:
                    responseBody = _b.apply(_a, [_c.sent()]);
                    failService.apiResponse.responseBody = responseBody;
                    if (responseBody.status === 'ERROR')
                        try {
                            if (responseBody.typeReports[0].objectReports[0].errorReports[0].message.includes('matching'))
                                return [2 /*return*/, failService.fail(ErrorType.alreadyExists)];
                            else
                                return [2 /*return*/, failService.fail(ErrorType.dhis2ErrorSpecified)];
                        }
                        catch (e) {
                            return [2 /*return*/, failService.fail(ErrorType.dhis2ErrorUnspecified)];
                        }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    return [2 /*return*/, failService.fail(ErrorType.cannotParse)];
                case 4: return [2 /*return*/, failService.success()];
            }
        });
    });
}
//# sourceMappingURL=inspectResponse.service.js.map