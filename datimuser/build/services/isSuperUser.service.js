"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuperUser = void 0;
function isSuperUser(userRoles) {
    return userRoles.map(({ name }) => name).includes('Superuser ALL authorities');
}
exports.isSuperUser = isSuperUser;
