"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineUserType = exports.isUserType = void 0;
const userType_type_1 = require("../types/userType.type");
const regExpMatchers_const_1 = require("../const/regExpMatchers.const");
const getTypes_service_1 = require("./getTypes.service");
function isUserType(userGroups, type) {
    return userGroups.some(userGroup => {
        let userGroupName = userGroup.name;
        let re = new RegExp(regExpMatchers_const_1.userTypeReRules[type]);
        return re.test(userGroupName);
    });
}
exports.isUserType = isUserType;
function determineUserType(userGroups) {
    let foundTypes = [];
    (0, getTypes_service_1.getAppUserTypes)().forEach((userType) => {
        if (isUserType(userGroups, userType))
            foundTypes.push(userType);
    });
    const userTypes = (0, getTypes_service_1.getAllUserTypes)();
    foundTypes.sort((t1, t2) => userTypes.indexOf(t2) - userTypes.indexOf(t1));
    if (foundTypes.length > 1)
        console.log(`Multiple User Types found ${foundTypes} ${userGroups.map(g => g.name)}`);
    if (foundTypes.length === 0)
        return userType_type_1.UserType.unknown;
    return foundTypes[0];
}
exports.determineUserType = determineUserType;
