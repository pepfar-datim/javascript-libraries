"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeReRules = void 0;
const userType_type_1 = require("../types/userType.type");
exports.userTypeReRules = {
    [userType_type_1.UserType.Partner]: '^OU .+ Partner .+ users',
    [userType_type_1.UserType.GlobalPartner]: '^Global Partner .+ users',
    [userType_type_1.UserType.Agency]: '^OU .+ Agency .+ users',
    [userType_type_1.UserType.GlobalAgency]: '^Global Agency .+ users',
    [userType_type_1.UserType.Global]: '^Global users',
    [userType_type_1.UserType.InterAgency]: '^OU .+ Interagency users',
    [userType_type_1.UserType.MOH]: '^OU .+ MOH users$',
    [userType_type_1.UserType.System]: '^System users$'
};
