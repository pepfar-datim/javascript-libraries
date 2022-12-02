"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineOrganization = void 0;
const userType_type_1 = require("../types/userType.type");
const regExpMatchers_const_1 = require("../const/regExpMatchers.const");
function determineOrganization(userType, userGroups) {
    if ([userType_type_1.UserType.Partner, userType_type_1.UserType.Agency, userType_type_1.UserType.GlobalAgency, userType_type_1.UserType.GlobalPartner].indexOf(userType) === -1)
        return null;
    let rule = regExpMatchers_const_1.userTypeReRules[userType];
    let re = new RegExp(rule);
    let group = userGroups.map(g => g.name).filter(g => re.test(g))[0];
    if (userType === userType_type_1.UserType.Partner) {
        return group.replace(/^OU .+ Partner .+ users - /, '');
    }
    if (userType === userType_type_1.UserType.GlobalPartner) {
        return group.replace(/^Global Partner .+ users - /, '');
    }
    if (userType === userType_type_1.UserType.Agency) {
        return group.replace(/^OU .+ Agency /, '').replace(/ users$/, '');
    }
    if (userType === userType_type_1.UserType.GlobalAgency) {
        return group.replace(/^Global Agency /, '').replace(/ users$/, '');
    }
    return group;
}
exports.determineOrganization = determineOrganization;
