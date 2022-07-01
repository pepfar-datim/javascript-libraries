"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getBlob = exports.getText = exports.getJson = void 0;
var config_service_1 = require("../config.service");
var getMock_serivce_1 = require("../mock/getMock.serivce");
var getCache_service_1 = require("../cache/getCache.service");
var http_types_1 = require("../../types/http.types");
var mergeOptions = function (options, acceptType) { return Object.assign({ headers: { Accept: acceptType } }, options); };
function getJson(endpointUrl, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData(endpointUrl, mergeOptions(options, http_types_1.ContentType.json)).then(function (r) { return r.json(); })["catch"](function (error) {
                        console.error("Request failed", endpointUrl, error);
                        throw error;
                    })];
                case 1:
                    response = _a.sent();
                    if ((0, config_service_1.isTestEnv)() && !(0, getMock_serivce_1.isGetMocked)(endpointUrl))
                        (0, getCache_service_1.saveResponseToCache)(config_service_1.config.testUsername, endpointUrl, response);
                    return [2 /*return*/, response];
            }
        });
    });
}
exports.getJson = getJson;
function getText(endpointUrl, options) {
    return getData(endpointUrl, mergeOptions(options, http_types_1.ContentType.text)).then(function (r) { return r.text(); });
}
exports.getText = getText;
function getBlob(endpointUrl) {
    return getData(endpointUrl).then(function (r) { return r.blob(); });
}
exports.getBlob = getBlob;
function getData(endpointUrl, options) {
    if ((0, config_service_1.isTestEnv)() && (0, getMock_serivce_1.isGetMocked)(endpointUrl))
        return Promise.resolve((0, getMock_serivce_1.getMockedResponse)(endpointUrl));
    if ((0, config_service_1.isTestEnv)() && (0, getCache_service_1.isResponseCached)(config_service_1.config.testUsername, endpointUrl))
        return Promise.resolve((0, getCache_service_1.getCachedResponse)(config_service_1.config.testUsername, endpointUrl));
    if ((0, config_service_1.isTestEnv)())
        options.headers['authorization'] = (0, config_service_1.getAuthorization)();
    if ((0, config_service_1.isTestEnv)())
        console.log("Request not cached ".concat(endpointUrl));
    return fetch((0, config_service_1.getFullUrl)(endpointUrl), __assign({ credentials: 'include' }, options));
}
//# sourceMappingURL=get.service.js.map