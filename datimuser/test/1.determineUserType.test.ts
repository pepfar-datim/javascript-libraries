import {determineUserType} from "../services/determineUserType.service";
import {TestCase, testCases} from "./data/1.determineUserType.testData";

function executeTest({userGroups,userType}:TestCase){
    test(`1 > Determine user type > ${userType}`, ()=>{
        expect(determineUserType(userGroups)).toBe(userType)
    })
}

testCases.forEach(executeTest)