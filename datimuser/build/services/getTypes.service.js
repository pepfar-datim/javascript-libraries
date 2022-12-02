"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppUserTypes = exports.getAllUserTypes = void 0;
const userType_type_1 = require("../types/userType.type");
function getAllUserTypes() {
    return Object.entries(userType_type_1.UserType).map(e => e[1]);
}
exports.getAllUserTypes = getAllUserTypes;
function getAppUserTypes() {
    return getAllUserTypes().filter(t => ![userType_type_1.UserType.unknown, userType_type_1.UserType.superAdmin].includes(t));
}
exports.getAppUserTypes = getAppUserTypes;
