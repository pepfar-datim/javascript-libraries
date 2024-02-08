"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
var get_service_1 = require("./services/methods/get.service");
var config_service_1 = require("./services/config.service");
var getMock_serivce_1 = require("./services/mock/getMock.serivce");
var getCache_service_1 = require("./services/cache/getCache.service");
var sendData_service_1 = require("./services/methods/sendData.service");
var sendMock_service_1 = require("./services/mock/sendMock.service");
__exportStar(require("./services/methods/inspectResponse.service"), exports);
__exportStar(require("./types/http.types"), exports);
exports["default"] = {
    getJson: get_service_1.getJson,
    getText: get_service_1.getText,
    getBlob: get_service_1.getBlob,
    postJson: sendData_service_1.postJson,
    putJson: sendData_service_1.putJson,
    patchJson: sendData_service_1.patchJson,
    postText: sendData_service_1.postText,
    postEmpty: sendData_service_1.postEmpty,
    registerGetMock: getMock_serivce_1.registerGetMock,
    registerSendMock: sendMock_service_1.registerSendMock,
    initTestCache: getCache_service_1.initTestCache,
    setTestUsername: config_service_1.setTestUsername,
    register: config_service_1.register,
    getBaseUrl: config_service_1.getBaseUrl
};
//# sourceMappingURL=index.ts.map