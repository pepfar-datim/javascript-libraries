"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const determineOrganization_service_1 = require("../services/determineOrganization.service");
const _2_determineOrganization_testData_1 = require("./data/2.determineOrganization.testData");
function executeTest({ userGroups, userType, organization }) {
    test(`2 > Determine organization > ${userType}`, () => {
        expect((0, determineOrganization_service_1.determineOrganization)(userType, userGroups)).toBe(organization);
    });
}
_2_determineOrganization_testData_1.testCases.forEach(executeTest);
