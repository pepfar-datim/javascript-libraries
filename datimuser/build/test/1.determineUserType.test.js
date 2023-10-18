"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const determineUserType_service_1 = require("../services/determineUserType.service");
const _1_determineUserType_testData_1 = require("./data/1.determineUserType.testData");
function executeTest({ userGroups, userType }) {
    test(`1 > Determine user type > ${userType}`, () => {
        expect((0, determineUserType_service_1.determineUserType)(userGroups)).toBe(userType);
    });
}
_1_determineUserType_testData_1.testCases.forEach(executeTest);
