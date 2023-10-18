import { idName } from "./idName.type";
export declare type DhisUser = {
    userGroups: idName[];
    userCredentials: {
        userRoles: idName[];
        disabled?: boolean;
    };
};
