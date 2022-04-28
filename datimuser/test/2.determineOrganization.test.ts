import {determineOrganization} from "../services/determineOrganization.service";
import { TestCase, testCases } from "./data/2.determineOrganization.testData";

function executeTest({userGroups,userType,organization}:TestCase){
    test(`2 > Determine organization > ${userType}`, ()=>{
        expect(determineOrganization(userType,userGroups)).toBe(organization)
    })
}

testCases.forEach(executeTest)