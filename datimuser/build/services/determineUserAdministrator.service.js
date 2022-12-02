"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineUserAdministrator = void 0;
function determineUserAdministrator(userGroups) {
    return userGroups.some(g => g.name.toLowerCase().indexOf('user administrators') > -1);
}
exports.determineUserAdministrator = determineUserAdministrator;
