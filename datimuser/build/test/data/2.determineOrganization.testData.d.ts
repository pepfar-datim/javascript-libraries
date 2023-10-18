import { idName } from "../../types/idName.type";
import { UserType } from "../../types/userType.type";
export declare type TestCase = {
    userGroups: idName[];
    userType: UserType;
    organization: string;
};
export declare const testCases: TestCase[];
